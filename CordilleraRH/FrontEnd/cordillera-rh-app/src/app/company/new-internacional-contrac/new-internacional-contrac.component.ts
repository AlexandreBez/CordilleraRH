import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-internacional-contrac',
  templateUrl: './new-internacional-contrac.component.html',
  styleUrls: ['./new-internacional-contrac.component.css']
})
export class NewInternacionalContracComponent {

  @ViewChild('internacionalForm')
  internacionalForm: NgForm;

  constructor(

  ) { }

  onCancelNewInternacionalContract(){

  }

  onCreateNewInternacionalContract(){

  }
}
