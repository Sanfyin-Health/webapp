import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "";

  public getLoggedInName = new Subject<any>();

  constructor(private _http:HttpClient, private urls:UrlService) {
    this.baseUrl = urls.getBaseUrl();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  onLogin(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/Authentication/login",obj,this.httpOptions);
  }

  emit(id:any)
  {
    this.getLoggedInName.next(id);
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("token");
  }

  loggedInId()
  {
    return Number(localStorage.getItem("userid"));
  }

  isAdmin()
  {
    if(!!localStorage.getItem("token"))
    {

      let role = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      console.log(role);
      return 'admin' === role;
    }

    return false;
  }
}