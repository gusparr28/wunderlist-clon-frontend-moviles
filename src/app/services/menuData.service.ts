import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { menuData } from '../interfaces/menuData';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(private _http: HttpClient) { }

  public getMenuData() {
    return this._http.get<menuData[]>('assets/data/menu-data.json');
  }
}
