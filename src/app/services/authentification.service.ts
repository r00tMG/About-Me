import { Injectable } from '@angular/core';
import {AppUser} from "../models/users.model";
import {Observable, of, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users:AppUser[]=[];
  authenticatedUser: AppUser|undefined;

  constructor() {
    let nextUserId = 1;
    const userId = nextUserId.toString();
    nextUserId++;
    this.users.push({userId , username:"user1",password:"1234",roles:["USER"]});
    this.users.push({userId ,username:"user2",password:"1234",roles:["USER"]});
    this.users.push({userId ,username:"admin",password:"1234",roles:["ADMIN","USER"]});
  }
  //methodes d'authentification
  public login(username:string,password:string):Observable<AppUser>{
    let appUser = this.users.find(u=> u.username==username);
    if (!appUser) return throwError(()=>new Error("User not found"));
    if(appUser.password!=password) {
      return throwError(()=>new Error("Bad Credentials"));
    }
    return of(appUser);
  }
  public authenticateUser(appUser:AppUser):Observable<boolean>{
        this.authenticatedUser=appUser;
        localStorage.setItem("authUser",JSON.stringify({
          username:appUser.username,password:appUser.password, roles:appUser.roles,jwt:"JWT_TOKEN"
        }));
        return of(true)
  }
  // methode pour savoir qui est connecté
  public hasRole(role:string):boolean{
       return this.authenticatedUser!.roles.includes(role);
  }
  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
  public logout():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true)
  }




}
