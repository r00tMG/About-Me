export enum DataStateEnum {
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error"
}
export interface AppDataState<T>{
  dataState:DataStateEnum,
  errorMessage?:string,
  data?:T
}
