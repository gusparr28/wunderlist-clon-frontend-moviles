import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _getUserInfoUrl: string = "http://localhost:3000/profile";
  private _signOutUserUrl: string = "http://localhost:3000/signout";

  constructor(private _http: HttpClient) { }

  public getUserInfo(token: string) {
    return this._http.get(this._getUserInfoUrl, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
  };

  public signOutUser(token: string) {
    return this._http.get(this._signOutUserUrl, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
  };
}
