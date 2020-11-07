import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  public profileSubscription: Subscription;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    console.log('ngOnInit de profile');
    this.profileSubscription = this._userService.getUserInfo().subscribe((res: any) => {
      console.log('profile', res);
      this.userInfo['name'] = res.user.name;
      this.userInfo['email'] = res.user.email;
    })
  }

  ionViewDidLeave() {
    this.userInfo['name'] = '';
    this.userInfo['email'] = '';
    this.profileSubscription.unsubscribe();
  }
}
