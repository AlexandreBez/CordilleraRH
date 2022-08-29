import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../Localization.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  constructor(
    private localization: LocalizationService,
    private router: Router
  ) {}

  // country loader
  country = this.localization.countrys;

  // errors variables
  companyError: boolean = false;
  idTypeError: boolean = false;
  companyIdError: boolean = false;

  entranceError: boolean = false;
  cellphoneError: boolean = false;
  emailError: boolean = false;

  countryError: boolean = false;
  stateError: boolean = false;
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
    companyNameInput: any,
    idTypeSelect: any,
    idCompanyInput: any,

    entranceSelect: any,
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
      if(companyNameInput.value === '') {
        this.companyError = true;
        setTimeout(() => {
          this.companyError = false;
        }, 2500);
        return this.isValid = false;
      }else if(idTypeSelect.value === 'default') {
        this.idTypeError = true;
        setTimeout(() => {
          this.idTypeError = false;
        }, 2500);
        return this.isValid = false;
      }else if(idCompanyInput.value === '') {
        this.companyIdError = true;
        setTimeout(() => {
          this.companyIdError = false;
        }, 2500);
        return this.isValid = false;
      }else if(entranceSelect.value === ''){
        this.entranceError = true;
        setTimeout(() => {
          this.entranceError = false;
        }, 2500);
        return this.isValid = false;
      }else if(cellphoneInput.value === ''){
        this.cellphoneError = true;
        setTimeout(() => {
          this.cellphoneError = false;
        }, 2500);
        return this.isValid = false;
      }else if(emailInput.value === ''){
        this.emailError = true;
        setTimeout(() => {
          this.emailError = false;
        }, 2500);
        return this.isValid = false;
      }else if(countrySelected.value === 'default') {
        this.countryError = true;
        setTimeout(() => {
          this.countryError = false;
        }, 2500);
        return this.isValid = false;
      }else if(stateInput.value === ''){
        this.stateError = true;
        setTimeout(() => {
          this.stateError = false;
        }, 2500);
        return this.isValid = false;
      }else if(cityInput.value === '') {
        this.cityError = true;
        setTimeout(() => {
          this.cityError = false;
        }, 2500);
        return this.isValid = false;
      }else if(streetInput.value === '') {
        this.streetError = true;
        setTimeout(() => {
          this.streetError = false;
        }, 2500);
        return this.isValid = false;
      }else if(numberInput.value === ''){
        this.numberError = true;
        setTimeout(() => {
          this.numberError = false;
        }, 2500);
        return this.isValid = false;
      }else if(zipCodeInput.value === '') {
        this.zipCodeError = true;
        setTimeout(() => {
          this.zipCodeError = false;
        }, 2500);
        return this.isValid = false;
      }else{
        return (this.isValid = true);
      }
    }
    
    // If everthing is right then create the company
    if(this.isValid === true){
      this.createSuccess = true;
      setTimeout(
        () => {
          this.router.navigate(['/manage-company']);
        }, 3000
      )
    }

    return 0;
  }

  onCancelCompany() {
    this.router.navigate(['/']);
  }
}
