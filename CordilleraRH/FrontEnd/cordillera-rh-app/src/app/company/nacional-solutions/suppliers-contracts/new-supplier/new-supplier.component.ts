import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {

  @ViewChild('addNewSupplierForm')
  addNewSupplierForm: NgForm;

  @Input()
  showNewSupplier = false;

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
      this.showNewSupplier = false;
    }, 2000);
  }

  onCancel(){
    this.addNewSupplierForm.reset();
    this.showNewSupplier = false;
  }

}
