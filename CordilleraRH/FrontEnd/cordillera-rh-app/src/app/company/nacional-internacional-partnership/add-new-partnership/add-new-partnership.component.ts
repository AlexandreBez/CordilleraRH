import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-partnership',
  templateUrl: './add-new-partnership.component.html',
  styleUrls: ['./add-new-partnership.component.css']
})
export class AddNewPartnershipComponent implements OnInit {

  @ViewChild('addNewSupplierForm')
  addNewSupplierForm: NgForm;

  @Input()
  showNewPartnership = false;

  isCreatedNewSupplierSuccefully = false;
  isCreatedNewSupplierFailed = false;

  untilClientCloseContract = false;

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUntilClientCloseContract(){
    if(this.untilClientCloseContract === false){
      this.untilClientCloseContract = true;
    }else{
      this.untilClientCloseContract = false;
    }

  }

  onCreateNewSupplier(){
    this.isLoading = true;
    this.isCreatedNewSupplierSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isCreatedNewSupplierSuccefully = false;
      this.showNewPartnership = false;
    }, 2000);
  }

  onCancel(){
    this.addNewSupplierForm.reset();
    this.showNewPartnership = false;
  }
}
