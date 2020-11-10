import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _getUserInfoUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/profile";
  private _signOutUserUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/signout";

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
