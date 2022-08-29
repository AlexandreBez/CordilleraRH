import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../Company.service';
import { LocalizationService } from '../Localization.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private localization: LocalizationService,
    private companys: CompanyService,
    private router: Router
  ) {}

  // country loader
  country = this.localization.countrys;
  company = this.companys.companys;

  // errors variables
  nameError: boolean = false;
  companyError: boolean = false;
  roleError: boolean = false;

  birthdateError: boolean = false;
  cellphoneError: boolean = false;
  emailError: boolean = false;

  countryError: boolean = false;
  stateError: any = false;
  cityError: boolean = false;

  streetError: boolean = false;
  numberError: boolean = false;
  zipCodeError: boolean = false;

  // validated form
  isValid = false;

  // success alert
  createSuccess = false;

  ngOnInit() {}

  onCreateCompany(
    nameInput: any,
    companySelect: any,
    roleInput: any,

    birthdateSelect: any,
    cellphoneInput: any,
    emailInput: any,

    countrySelected: any,
    stateInput: any,
    cityInput: any,

    streetInput: any,
    numberInput: any,
    zipCodeInput: any
  ) {

    while (this.isValid === false) {

      // Validate if values are not empty else create company and redirect to manage company
      if(nameInput.value === ''){

        this.nameError = true;
        setTimeout(() => {
          this.nameError = false;
        }, 4000);
        return this.isValid = false;

      }else if(companySelect.value === 'default'){

        this.companyError = true;
        setTimeout(() => {
          this.companyError = false;
        }, 4000);
        return this.isValid = false;
      
      }else if(roleInput.value === ''){

        this.roleError = true;
        setTimeout(() => {
          this.roleError = false;
        }, 4000);
        return this.isValid = false;
      
      }else if(birthdateSelect.value === ''){

        this.birthdateError = true;
        setTimeout(() => {
          this.birthdateError = false;
        }, 4000);
        return this.isValid = false;

      }else if(cellphoneInput.value === ''){

        this.cellphoneError = true;
        setTimeout(() => {
          this.cellphoneError = false;
        }, 4000);
        return this.isValid = false;

      }else if(emailInput.value === ''){
        
        this.emailError = true;
        setTimeout(
          () => {
            this.emailError = false;
          }, 4000
        )
        return this.isValid = false;

      }else if(countrySelected.value === 'default'){

        this.countryError = true;
        setTimeout(
          () => {
          this.countryError = false;
        }, 4000);
        return this.isValid = false;

      }else if(stateInput.value === ''){

        this.stateError = true;
        setTimeout(
          () => {
          this.stateError = false;
        }, 4000);
        return this.isValid = false;
      
      }else if(cityInput.value === ''){
        this.cityError = true;
        setTimeout(() => {
          this.cityError = false;
        }, 4000);
        return this.isValid = false;
      }else if(streetInput.value === ''){
        this.streetError = true;
        setTimeout(() => {
          this.streetError = false;
        }, 4000);
        return this.isValid = false;
      }else if(numberInput.value === ''){
        this.numberError = true;
        setTimeout(() => {
          this.numberError = false;
        }, 4000);
        return this.isValid = false;
      }else if(zipCodeInput.value === ''){
        this.zipCodeError = true;
        setTimeout(() => {
          this.zipCodeError = false;
        }, 4000);
        return this.isValid = false;
      } else {
        return (this.isValid = true);
      }

    }
    
    // If everthing is right then create the company
    if(this.isValid === true){
      this.createSuccess = true;
      setTimeout(
        () => {
          this.router.navigate(['/manage-employees']);
        }, 2000
      )
    }

    return 0;
  }

  onCancelCompany() {
    this.router.navigate(['/']);
  }

}
