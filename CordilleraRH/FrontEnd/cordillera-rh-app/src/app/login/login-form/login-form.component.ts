import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm?: FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required)
      }
    );
  }

  constructor(
    private router: Router,
    private token: AuthService
  ) {}

  onLoginClicked(){

    // if(this.email === 'admin@cordilleraRH.com' && this.password === 'admin123'){
    //   this.router.navigate(["/"]);
    //   this.token.token = true;
    // }else{
    //   this.email = "";
    //   this.password = "";
    //   alert("Email and/or password wrong....")
    // };

  }
}
