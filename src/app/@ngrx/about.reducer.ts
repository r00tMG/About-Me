import { Action } from "@ngrx/store";
import { Committer } from "../models/committer.model";
import { AboutActionsTypes, CommitterAction } from "./about.actions";

export enum AboutReducerEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    NEW="New"
}

export interface AboutReducerState{
    committers:Committer[],
    errorMessage?:string,
    dataState:AboutReducerEnum
}

const  initState:AboutReducerState=
{
    committers:[],
    errorMessage:"",
    dataState:AboutReducerEnum.INITIAL
}

export function aboutReducer(state=initState, action:Action):AboutReducerState{
    switch (action.type) {
        /* Reducer Get All Committer */
         case AboutActionsTypes.GET_ALL_COMMITTER:
             return {...state,dataState:AboutReducerEnum.LOADING};
         case AboutActionsTypes.GET_ALL_COMMITTER_SUCCESS:
             return {...state,dataState:AboutReducerEnum.LOADED,committers:(<CommitterAction>action).payload};
         case AboutActionsTypes.GET_ALL_COMMITTER_ERROR:
             return {...state,dataState:AboutReducerEnum.ERROR,errorMessage:(<CommitterAction>action).payload};
        /* Reducer New Committer */
         case AboutActionsTypes.NEW_COMMITTER:
             return {...state,dataState:AboutReducerEnum.LOADING};
         case AboutActionsTypes.NEW_COMMITTER_SUCCESS:
             return {...state,dataState:AboutReducerEnum.NEW};
         case AboutActionsTypes.NEW_COMMITTER_ERROR:
             return {...state,dataState:AboutReducerEnum.ERROR,errorMessage:(<CommitterAction>action).payload};
        /* Reducer Save Committer */
         case AboutActionsTypes.SAVE_COMMITTER:
             return {...state,dataState:AboutReducerEnum.LOADING};
         case AboutActionsTypes.SAVE_COMMITTER_SUCCESS:
            let commit:Committer[]=[...state.committers];
            commit.push((<CommitterAction>action).payload);
             return {...state,dataState:AboutReducerEnum.LOADED,committers:commit};
         case AboutActionsTypes.SAVE_COMMITTER_ERROR:
             return {...state,dataState:AboutReducerEnum.ERROR,errorMessage:(<CommitterAction>action).payload};
        default :
            return {...state};
            break;
     }
}
