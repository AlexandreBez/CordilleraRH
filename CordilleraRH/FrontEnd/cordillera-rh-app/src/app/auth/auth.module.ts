import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthRouterModule } from "./auth-router.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        AuthRouterModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule{

}