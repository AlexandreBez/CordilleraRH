import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { FormsModule } from '@angular/forms';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { LocalizationService } from './Localization.service';
import { CompanyInfoComponent } from './manage-company/company-info/company-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeInfoComponent } from './manage-employee/employee-info/employee-info.component';
import { CompanyService } from './Company.service';
import { EmployeeService } from './Employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    RecoverPasswordComponent,
    AddCompanyComponent,
    ManageCompanyComponent,
    CompanyInfoComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LocalizationService, CompanyService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
