import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
  private _getUserInfoUrl: string = "http://localhost:3000/profile";

  constructor(private _http: HttpClient) { }

  public getUserInfo() {
    return this._http.get(this._getUserInfoUrl, {
      headers: this.headers
    });
  };

  public editUser() {

  }

  public deleteUser() {

  }
}
