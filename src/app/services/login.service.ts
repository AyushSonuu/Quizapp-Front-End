import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //getCurrentUser returns the details of the user who was logged in
  public getCurrentUser(){
    return this.http.get(`${baseUrl}v1/current-user`);
  }

  //getUserByUsername returns the details of the entered username
  // public getUserByUsername(){
  //   return this.http.get(`${baseUrl}v1/user/ayush15`);
  // }

  //Generate token
  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}v1/generate_token`,loginData)
  }

  //Login user : Store the generated token in local storage
  public loginUser(token: string){
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin : User is logged in or not
  public isLoggedIn(){
    let tokenstr=localStorage.getItem('token');
    if(tokenstr == undefined || tokenstr == '' || tokenstr == null){
      return false;
    }
    else{
      return true;
    }
  }

  //Get token
  public getToken(){
    return localStorage.getItem('token')
  }

  //Logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  //set userDetail
  public setUser(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //get userRole
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
