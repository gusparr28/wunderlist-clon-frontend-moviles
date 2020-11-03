import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { menuData } from 'src/app/interfaces/menuData';
import { MenuDataService } from 'src/app/services/menuData.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public menuData: Observable<menuData[]>;

  constructor(private _menuDataService: MenuDataService) { }

  ngOnInit() {
    this.menuData = this._menuDataService.getMenuData();
  }

}
