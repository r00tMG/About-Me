import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import { AboutService } from "../services/about.service";
import {
  AboutActionsTypes,
  CommitterAction,
  GetAllCommittersActionError,
  GetAllCommittersActionSuccess,
  NewCommittersActionError,
  NewCommittersActionSuccess,
  SaveCommittersActionError,
  SaveCommittersActionSuccess
} from "./about.actions";

@Injectable()
export class AboutEffects{
    constructor(private aboutService:AboutService,
        private effectsAction:Actions){}

        /* Get All Committer */
        getAllCommitterEffect:Observable<CommitterAction>=createEffect(
          ()=>this.effectsAction.pipe(
            ofType(AboutActionsTypes.GET_ALL_COMMITTER),
            mergeMap(
              (action:CommitterAction)=>{
                return this.aboutService.getAllCommitter()
                  .pipe(
                    map((committer)=>new GetAllCommittersActionSuccess(committer)),
                    catchError((err)=>of(new GetAllCommittersActionError(err.message)))
                  )
              }
            )
          )
        )
        /* New Committer */
       newCommitterEffect:Observable<CommitterAction>=createEffect(
          ()=>this.effectsAction.pipe(
            ofType(AboutActionsTypes.NEW_COMMITTER),
            map(
              (action:CommitterAction)=>{
                return new NewCommittersActionSuccess({})
              }
            )
          )
        )
         /* Save New Committer */
         saveCommitterEffect:Observable<CommitterAction>=createEffect(
          ()=>this.effectsAction.pipe(
            ofType(AboutActionsTypes.SAVE_COMMITTER),
            mergeMap(
              (action:CommitterAction)=>{
                return this.aboutService.saveCommitter(action.payload)
                  .pipe(
                    map((committer)=>new SaveCommittersActionSuccess(committer)),
                    catchError((err)=>of(new SaveCommittersActionError(err.message)))
                  )
              }
            )
          )
        )
        
}
