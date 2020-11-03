import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _getTasksByUserUrl: string = "http://localhost:3000/task";

  constructor(private _http: HttpClient) { }

  getTasksByUser() {
    return this._http.get(this._getTasksByUserUrl, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
  }
}
