import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitterComponent } from './components/index/committer/committer.component';

const routes: Routes = [
  {
    path:"committer",component:CommitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
