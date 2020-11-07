import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private _router: Router, private _utilsService: UtilsService) { }

  public signOut() {
    this._utilsService.present('Please wait...');
    localStorage.removeItem('token');
    setTimeout(() => {
      this._utilsService.dismiss();
      this._router.navigate(['/signin']);
    }, 500)
  }
}
