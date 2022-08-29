import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

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
  },

  {
    path: 'add-company',
    component: AddCompanyComponent
  },

  {
    path: 'manage-company',
    component: ManageCompanyComponent,
  },
  
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },

  {
    path:'manage-employees',
    component: ManageEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
