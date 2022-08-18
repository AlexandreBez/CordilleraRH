import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  showMessage: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRecoverPassword(){
    this.showMessage = true;
    setTimeout(
      () => {
        this.router.navigate(['login']);
      }, 6000
    )
  }
}
