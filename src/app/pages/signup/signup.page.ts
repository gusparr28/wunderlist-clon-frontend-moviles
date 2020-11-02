import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormComponent } from 'src/app/components/form/form.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild(FormComponent) formComponent: FormComponent;

  public signUpForm: any = [
    { id: 'name', placeholder: 'Name' },
    { id: 'email', placeholder: 'Email' },
    { id: 'password', placeholder: 'Password: 6-64 characters' }
  ]
  public userSubscription: Subscription;

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.formComponent.formData['name'] = '';
    this.formComponent.formData['email'] = '';
    this.formComponent.formData['password'] = '';
    this.userSubscription.unsubscribe();
  }

  public postData(data) {
    this.userSubscription = this._authService.signUp(data).subscribe(res => {
      console.log(res);
      this._router.navigate(['/']);
    });
  }
}
