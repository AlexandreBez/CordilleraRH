import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email!: string;
  password!: string;

  ngOnInit(){
    
  }

  constructor(
    private router: Router,
    private token: AuthService
  ) {}

  onLoginClicked(){

    if(this.email === 'admin@cordilleraRH.com' && this.password === 'admin123'){
      this.router.navigate(["/"]);
      this.token.token = true;
    }else{
      this.email = "";
      this.password = "";
      alert("Email and/or password wrong....")
    };

  }
}
