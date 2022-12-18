import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {

  @Input()
  showNewPaymentRecord = false;

  isCreatedSuccefully = false;
  isCreatedFailed = false;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateNewPayment(){
    this.isLoading = true;
    this.isCreatedSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isCreatedSuccefully = false;
      this.showNewPaymentRecord = false;
    }, 2000);
  }

  onCancel(){
    this.showNewPaymentRecord = false;
  }

}
