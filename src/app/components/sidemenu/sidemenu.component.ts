import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { menuData } from 'src/app/interfaces/menuData';
import { MenuDataService } from 'src/app/services/menuData.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public menuData: Observable<menuData[]>;
  public name: string;

  constructor(private _menuDataService: MenuDataService, private _userService: UserService) { }

  ngOnInit() {
    this.menuData = this._menuDataService.getMenuData();
    this._userService.getUserInfo().subscribe((res: any) => {
      this.name = res.user.name;
    });
  }
}
