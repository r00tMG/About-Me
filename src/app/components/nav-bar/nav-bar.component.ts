import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  formCommitterGroup?:FormGroup;

  constructor(private aboutService:AboutService,private fb:FormBuilder,
              public authService:AuthentificationService,
              private router:Router){}
  ngOnInit():void{

      this.formCommitterGroup=this.fb.group(
          { first_name:[" ",Validators.required],
            last_name:[" ",Validators.required],
            mail:[" ",Validators.required],
            tel:["",Validators.required]
          }
        )
  }


  onSaveCommitter() {
    this.aboutService.saveCommitter(this.formCommitterGroup?.value).subscribe(
        data=>{
          alert("Success Saving Committer")
        }
    )
  }


  handleLogout() {
      this.authService.logout().subscribe(
        {
          next:(data)=>{
            this.router.navigateByUrl('login')
          }
        }
      )
  }
}
