import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public darkMode: boolean = false;
  public changeIcon: boolean = true;
  public themeToggleIcon: string = 'moon';

  constructor(private _utilsService: UtilsService,
    private _userService: UserService
  ) {
  }

  ngOnInit() { }

  public changeTheme() {
    if (this.themeToggleIcon == 'moon') {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
      this.themeToggleIcon = 'sunny';
    } else {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
      this.themeToggleIcon = 'moon';
    }
  };

  public signOut() {
    let token = localStorage.getItem('token');
    this._utilsService.present('Please wait...');
    this._userService.signOutUser(token).subscribe((res: any) => {
      setTimeout(() => {
        this._utilsService.dismiss();
        window.location.href = '/signin';
      }, 500);
    });
  }
}
