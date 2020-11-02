import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signUpUrl = 'http://localhost:3000/signup';
  private _signInUrl = 'http://localhost:3000/signin';

  constructor(private http: HttpClient) { }

  public signUp(user: any): Observable<any> {
    return this.http.post<any>(this._signUpUrl, user);
  }

  public signIn(user: any): Observable<any> {
    return this.http.post<any>(this._signInUrl, user);
  }

}
