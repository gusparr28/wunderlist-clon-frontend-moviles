import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };

  private _getTasksByUserUrl: string = "http://localhost:3000/task";
  private _createTaskUrl: string = "http://localhost:3000/task";

  constructor(private _http: HttpClient) { }

  public getTasksByUser() {
    return this._http.get(this._getTasksByUserUrl,
      { headers: this.headers });
  }

  public createTask(title: any, description: any): Observable<any> {
    return this._http.post<any>(this._createTaskUrl, {
      title,
      description
    }, { headers: this.headers })
  }

  public updateTask() {

  }

  public deleteTask() {

  }
}
