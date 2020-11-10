import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signUpUrl = 'https://wunderlist-clon-moviles.herokuapp.com/signup';
  private _signInUrl = 'https://wunderlist-clon-moviles.herokuapp.com/signin';

  constructor(private http: HttpClient) { }

  public signUp(user: any): Observable<any> {
    return this.http.post<any>(this._signUpUrl, user);
  }

  public signIn(user: any): Observable<any> {
    return this.http.post<any>(this._signInUrl, user);
  }

}
