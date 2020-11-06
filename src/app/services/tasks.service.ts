import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
  private _getTasksByUserUrl: string = "http://localhost:3000/task";
  private _createTaskUrl: string = "http://localhost:3000/task";
  private _getTasksByIdUrl: string = "http://localhost:3000/task/";
  private _updateTaskUrl: string = "http://localhost:3000/task/";
  private _deleteTaskUrl: string = "http://localhost:3000/task/";

  private _changeUser: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) { }

  public getTasksByUser() {
    return this._http.get(this._getTasksByUserUrl, {
      headers: this.headers
    });
  }

  public getTaskById(id: any) {
    return this._http.get(this._getTasksByIdUrl + id, {
      headers: this.headers
    });
  }

  public createTask(title: any, description: any): Observable<any> {
    return this._http.post<any>(this._createTaskUrl, {
      title,
      description
    }, { headers: this.headers });
  }

  public updateTask(id: any, task: any) {
    return this._http.put(this._updateTaskUrl + id, {
      ...task
    }, { headers: this.headers });
  }

  public deleteTask(id) {
    return this._http.delete(this._deleteTaskUrl + id, { headers: this.headers })
  }

  public changeValue(value) {
    this._changeUser.next(value);
  }

  public detectChange() {
    return this._changeUser.asObservable();
  }
}
