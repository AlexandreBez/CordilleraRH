import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [

      {
        path: '',
        component: LoginFormComponent
      },

      {
        path: 'recover',
        component: RecoverPasswordComponent
      }

    ]
  },

  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
