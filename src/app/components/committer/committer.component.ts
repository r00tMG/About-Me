import { Component } from '@angular/core';
import {AboutService} from "../../../services/about.service";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {Committer} from "../../../models/committer.model";
import {AppDataState, DataStateEnum} from "../../../states/about.state";

@Component({
  selector: 'app-committer',
  templateUrl: './committer.component.html',
  styleUrls: ['./committer.component.css']
})
export class CommitterComponent {
   commits$:Observable<AppDataState<Committer[]>> | null=null;
   readonly DataStateEnum = DataStateEnum;

  constructor(private aboutService:AboutService){

  }
  ngOnInit():void{
  }
  onGetAllCommitter(){
    this.commits$=this.aboutService.getAllCommitter().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }
}
