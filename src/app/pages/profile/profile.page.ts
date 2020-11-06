import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userInfo: any = {
    name: '',
    email: ''
  };
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserInfo().subscribe((res: any) => {
      this.userInfo['name'] = res.user.name;
      this.userInfo['email'] = res.user.email;
    })
  }
}
