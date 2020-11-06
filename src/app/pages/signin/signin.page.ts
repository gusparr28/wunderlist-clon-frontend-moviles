import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormComponent } from 'src/app/components/form/form.component';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;

  public signInForm: any = [
    { id: 'email', placeholder: 'Email' },
    { id: 'password', type: 'password', placeholder: 'Password: 6-64 characters' }
  ];
  public userSubscription: Subscription;

  constructor(private _router: Router, private _authService: AuthService, private _utilService: UtilsService) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.formComponent.formData['email'] = '';
    this.formComponent.formData['password'] = '';
    this.userSubscription.unsubscribe();
  }
  public postData(data: any) {
    this._utilService.presentLoading('Please wait...');
    this.userSubscription = this._authService.signIn(data).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._utilService.loading.dismiss();
      setTimeout(() => {
        // toast with res.message here
        this._router.navigate(['index/tasks']);
        // toast with error here
      }, 500);
    }, (err) => {
      this._utilService.loading.dismiss();
      setTimeout(() => {
        /* Show toast */
      }, 500);
    });
  }
}
