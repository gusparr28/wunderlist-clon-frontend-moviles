import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormComponent } from 'src/app/components/form/form.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;

  public signInForm: any = [
    { id: 'email', placeholder: 'Email' },
    { id: 'password', placeholder: 'Password: 6-64 characters' }
  ]
  public userSubscription: Subscription;

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'), 'token');
  }

  ionViewDidLeave() {
    this.formComponent.formData['email'] = '';
    this.formComponent.formData['password'] = '';
    this.userSubscription.unsubscribe();
  }

  public postData(data) {
    this.userSubscription = this._authService.signIn(data).subscribe(res => {
      console.log(res);
      this._router.navigate(['/home/tasks']);
    });
  }
}
