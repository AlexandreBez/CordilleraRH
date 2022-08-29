import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // fake token
  token: boolean = false;

  constructor(private router: Router) {}

  // If token is not true then return to the login page
  validateToken() {
    if (this.token === false) {
      this.router.navigate(['login']);
    }
  }
}
