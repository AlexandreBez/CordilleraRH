import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-bi-request',
  templateUrl: './new-bi-request.component.html',
  styleUrls: ['./new-bi-request.component.css']
})
export class NewBIRequestComponent implements OnInit {

  @ViewChild('addNewBIRRequestForm')
  addNewBIRRequestForm: NgForm;

  @Input()
  showNewBIRequest = false;

  isCreatedNewSupplierSuccefully = false;
  isCreatedNewSupplierFailed = false;

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateNewBIRequest(){
    this.isLoading = true;
    this.isCreatedNewSupplierSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isCreatedNewSupplierSuccefully = false;
      this.showNewBIRequest = false;
    }, 2000);
  }

  onCancel(){
    this.addNewBIRRequestForm.reset();
    this.showNewBIRequest = false;
  }

}
