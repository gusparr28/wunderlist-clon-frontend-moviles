import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Task } from '../interfaces/Task';
import { TaskRes } from '../interfaces/TaskRes';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public tasks = [];
  public headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
  private _getTasksByUserUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/task";
  private _createTaskUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/task";
  private _updateTaskUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/task/";
  private _deleteTaskUrl: string = "https://wunderlist-clon-moviles.herokuapp.com/task/";
  private _changeTask: Subject<any> = new Subject<any>();
  private _changeDateTime: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) { }

  public getTasksByUser(token: string) {
    return this._http.get(this._getTasksByUserUrl, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
  }

  public createTask(task: Task): Observable<TaskRes> {
    return this._http.post<TaskRes>(this._createTaskUrl, {
      ...task
    }, { headers: this.headers });
  }

  public updateTask(id: string, task: Task): Observable<TaskRes> {
    return this._http.put<TaskRes>(this._updateTaskUrl + id, {
      ...task
    }, { headers: this.headers });
  }

  public deleteTask(id: string): Observable<TaskRes> {
    return this._http.delete<TaskRes>(this._deleteTaskUrl + id, { headers: this.headers })
  }

  public changeValue(value: string) {
    this._changeTask.next(value);
  }

  public detectChange() {
    return this._changeTask.asObservable();
  }

  public changeDateTime(value: any) {
    this._changeDateTime.next(value)
  }

  public detectChangeDateTime() {
    return this._changeDateTime.asObservable()
  }
}
