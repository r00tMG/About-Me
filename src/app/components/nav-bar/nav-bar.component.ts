import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import {Store} from "@ngrx/store";
import {GetAllCommittersActions, NewCommittersActions, SaveCommittersActions, SaveCommittersActionSuccess} from "../../@ngrx/about.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AboutReducerState } from 'src/app/@ngrx/about.reducer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  formCommitterGroup?:FormGroup;
  state: AboutReducerState|null=null;

  constructor(private aboutService:AboutService,private store:Store<any>
  ,private fb:FormBuilder
              ){}
  ngOnInit():void{
    this.store.dispatch(new NewCommittersActions({}))
    this.store.subscribe(myStore=>{
      this.state=myStore.catalogStore;
      this.formCommitterGroup=this.fb.group(
          { first_name:[" ",Validators.required],
            last_name:[" ",Validators.required],
            mail:[" ",Validators.required],
            tel:["",Validators.required]
          }
        )
    })
  }



  onGetAllCommitters() {
    this.store.dispatch(new GetAllCommittersActions({}))
  }

  onSaveCommitter() {
    this.store.dispatch(new SaveCommittersActions(this.formCommitterGroup?.value));
  }
}
