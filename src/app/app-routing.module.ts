import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitterComponent } from './components/committer/committer.component';
import {IndexComponent} from "./components/index/index.component";
import {LoginComponent} from "./components/authentification/login/login.component";
import {AdminTemplateComponent} from "./components/admin-template/admin-template.component";
import {authentificationGuard} from "./guards/authentification.guard";

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:LoginComponent
  },
  {
    path:"admin",component:AdminTemplateComponent,
    canActivate:[authentificationGuard],
    children : [
      {
        path:"index",component:IndexComponent
      },
      {
        path:"committer",component:CommitterComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
