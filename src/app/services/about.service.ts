import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Committer } from "../models/committer.model";

@Injectable({providedIn:'root'})
export class AboutService{
  constructor(private http:HttpClient) {
  }
  getAllCommitter():Observable<Committer[]>{
    return this.http.get<Committer[]>("http://localhost:3000/committer")
  }
  saveCommitter(committer: Committer):Observable<Committer>{
    return this.http.post<Committer>("http://localhost:3000/committer",committer)
  }
  

}
