import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-nacional-contract',
  templateUrl: './new-nacional-contract.component.html',
  styleUrls: ['./new-nacional-contract.component.css']
})
export class NewNacionalContractComponent {

  @ViewChild('nacionalForm')
  nacionalForm: NgForm;

  constructor(

  ) { }

  onCreateNewNacionalContract(){

  }

  onCancelNewNacionalContract(){

  }
}
