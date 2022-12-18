import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form')
  authForm: NgForm;

  isLoggingMode = true;
  isLoading = false;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let email = this.authForm.value.email;
    let password = this.authForm.value.password

    if(!this.isLoggingMode){
      // Chama o service de reset de senha pro email
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isLoggingMode = true;
        this.authservice.resetPassword(email);
      }, 2000);
    }else{
      // Chama o service de login
      this.authservice.login(email, password);
    }

  }
}
