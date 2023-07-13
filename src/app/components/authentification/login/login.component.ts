import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usersFormGroup?:FormGroup
   errorMessage?: string;
    constructor(private fb:FormBuilder,private authService:AuthentificationService,
                private router:Router) {
    }
    ngOnInit():void{
        this.usersFormGroup=this.fb.group({
          username:this.fb.control(""),
          password:this.fb.control("")
          /* username:["",Validators.required],
          password:["",Validators.required],
          role:["",Validators.required] */
        })
    }

  handleLogin() {
    let username = this.usersFormGroup?.value.username;
    let password = this.usersFormGroup?.value.password;
    this.authService.login(username,password)
      .subscribe({
      next:(appUser)=>{
        this.authService.authenticateUser(appUser)
          .subscribe({
          next:(data)=>{
            this.router.navigateByUrl("/admin/index")
          }
          })
      },
      error: (err) => {
        this.errorMessage=err
      }
      });
  }
}
