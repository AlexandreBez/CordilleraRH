import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-contract',
  templateUrl: './end-contract.component.html',
  styleUrls: ['./end-contract.component.css']
})
export class EndContractComponent implements OnInit {

  @Input()
  showTerminationSuppliers = true;

  isLoading = false;
  isTerminatedSuccefully = false;
  isTerminatedFailed = false;
  

  constructor() { }

  ngOnInit(): void {
  }



  onSubmitTerminationFilesSupplier(){
    this.isLoading = true;
    this.isTerminatedSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isTerminatedFailed = false;
      this.showTerminationSuppliers = false;
    }, 2000);
  }

  onCancelTerminationFilesSupplier(){
    this.showTerminationSuppliers = false;
  }

}
