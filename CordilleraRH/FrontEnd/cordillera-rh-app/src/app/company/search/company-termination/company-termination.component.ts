import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-termination',
  templateUrl: './company-termination.component.html',
  styleUrls: ['./company-termination.component.css']
})
export class CompanyTerminationComponent implements OnInit {

  @ViewChild("submitFilesTermination")
  submitFilesTermination: NgForm;
  
  @Input()
  showTerminationDetails = false;

  error = null;

  constructor(
  ) { }

  ngOnInit() {

  }

  onSubmitTerminationFilesCompany(){
    this.showTerminationDetails = false
  }

  onCancelTerminationFilesCompany(){
    this.showTerminationDetails = true;
  }

}
