import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscriptionType: String = 'Advanced';
  subscriptionOptions = ['Basic', 'Advanced', 'Professional']
  submitted:Boolean = false;
  user = {
    email:'',
    password:'',
    subscriptionType:'',
  }


  onSubmit(){
    console.log(this.signupForm);
    this.submitted = true;

    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscriptionType = this.signupForm.value.subscriptionType;
    console.log(this.user);

    this.signupForm.reset();
  }
}
