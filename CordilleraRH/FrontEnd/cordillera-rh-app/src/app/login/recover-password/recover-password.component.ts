import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  showMessage: boolean = false;
  error: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // If email input is empty then show error if not then send to login page
  onRecoverPassword(emailRecover: string){

    if (emailRecover === "") {
      this.error = true;

      setTimeout(
        () => {
          this.error = false;
        }, 4000
      )
    }else{

      this.showMessage = true;

      setTimeout(
        () => {
          this.router.navigate(['login']);
        }, 6000

      )
    }

  }

  onCancelRecover(){
    this.router.navigate(['/login']);
  }
}
