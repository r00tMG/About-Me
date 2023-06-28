import { Action } from "@ngrx/store";
import { Committer } from "../models/committer.model";

export enum AboutActionsTypes{
  /* Get All Committer */
  GET_ALL_COMMITTER="[Committer] Get All Committer",
  GET_ALL_COMMITTER_SUCCESS="[Committer] Get All Committer SUCCESS",
  GET_ALL_COMMITTER_ERROR="[Committer] Get All Committer ERROR",
  /* Add New Committer */
  NEW_COMMITTER="[Committer] New Committer",
  NEW_COMMITTER_SUCCESS="[Committer] New Committer SUCCESS",
  NEW_COMMITTER_ERROR="[Committer] New Committer ERROR",
  /* Save new Committer */
  SAVE_COMMITTER="[Committer] Save New Committer",
  SAVE_COMMITTER_SUCCESS="[Committer] Save New Committer SUCCESS",
  SAVE_COMMITTER_ERROR="[Committer] Save New Committer ERROR"
}
 /* Get All Committer */

export class GetAllCommittersActions implements Action{
  type:AboutActionsTypes=AboutActionsTypes.GET_ALL_COMMITTER
  constructor(public payload?:any){}
}

export class GetAllCommittersActionSuccess implements Action{
  type:AboutActionsTypes = AboutActionsTypes.GET_ALL_COMMITTER_SUCCESS
  constructor ( public payload : Committer[]) {}
}

export class GetAllCommittersActionError implements Action{
  type:AboutActionsTypes=AboutActionsTypes.GET_ALL_COMMITTER_ERROR
  constructor(public payload:string){}
}
 /* Add New Committer */

export class NewCommittersActions implements Action{
  type:AboutActionsTypes=AboutActionsTypes.NEW_COMMITTER
  constructor(public payload:any){}
}

export class NewCommittersActionSuccess implements Action{
  type:AboutActionsTypes = AboutActionsTypes.NEW_COMMITTER_SUCCESS
  constructor ( public payload: any) {}
}

export class NewCommittersActionError implements Action{
  type:AboutActionsTypes=AboutActionsTypes.NEW_COMMITTER_ERROR
  constructor(public payload:string){}
}
 /* Save New Committer */

export class SaveCommittersActions implements Action{
  type:AboutActionsTypes=AboutActionsTypes.NEW_COMMITTER
  constructor(public payload:Committer){}
}

export class SaveCommittersActionSuccess implements Action{
  type:AboutActionsTypes = AboutActionsTypes.NEW_COMMITTER_SUCCESS
  constructor ( public payload: Committer) {}
}

export class SaveCommittersActionError implements Action{
  type:AboutActionsTypes=AboutActionsTypes.NEW_COMMITTER_ERROR
  constructor(public payload:string){}
}

/* Déclaration des ations */

export type CommitterAction=
GetAllCommittersActions|GetAllCommittersActionError|GetAllCommittersActionSuccess|
NewCommittersActions|NewCommittersActionError|NewCommittersActionSuccess|
SaveCommittersActions|SaveCommittersActionError|SaveCommittersActionSuccess
