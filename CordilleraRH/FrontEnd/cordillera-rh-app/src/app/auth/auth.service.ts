
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(
        // private http: HttpClient, 
        private router: Router
    ){}
    
    login(email: string, password: string){
        alert(email + " " + password);
        this.router.navigate(['Home'])
    }

    resetPassword(email: string){
        alert(email);
        this.router.navigate(['Login']);
    }
}