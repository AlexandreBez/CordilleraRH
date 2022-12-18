import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {

  @ViewChild('editBIRequestForm')
  editBIRequestForm: NgForm;

  @Input()
  showEditRequest = false;

  isCreatedNewSupplierSuccefully = false;
  isCreatedNewSupplierFailed = false;

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditBIRequest(){
    this.isLoading = true;
    this.isCreatedNewSupplierSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isCreatedNewSupplierSuccefully = false;
      this.showEditRequest = false;
    }, 2000);
  }

  onCancel(){
    this.editBIRequestForm.reset();
    this.showEditRequest = false;
  }

}
