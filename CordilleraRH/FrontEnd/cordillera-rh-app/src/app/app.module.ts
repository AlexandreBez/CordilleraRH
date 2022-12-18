import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SearchCompanyModule } from './company/search/search-company.module';
import { NewNacionalContracModule } from './company/new-nacional-contract/new-nacional-contract.module';
import { NewInternacionalContracModule } from './company/new-internacional-contrac/new-international-contract.module';
import { SearchEmployeeModule } from './employee/search/search-employee.module';
import { NewEmployeeModule } from './employee/new-employee/new-employee.module';
import { EmployeeSolutionsModule } from './employee/employees-solutions/employees-solutions.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    SearchCompanyModule,
    NewNacionalContracModule,
    NewInternacionalContracModule,
    SearchEmployeeModule,
    NewEmployeeModule,
    EmployeeSolutionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }