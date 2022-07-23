import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  errorMsg: boolean = false

  ngOnInit(): void {
  }

  closeErrorMsg(){
    this.errorMsg = false;
  }

  loginClick(){
    
    if(this.username !== "teste@teste.com" || this.password !== "teste"){
      this.errorMsg = true;
      this.username = "";
      this.password = "";
    }else{
      console.log("funcionou");
    }


  }
}
