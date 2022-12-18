import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-payment',
  templateUrl: './add-new-payment.component.html',
  styleUrls: ['./add-new-payment.component.css']
})
export class AddNewPaymentComponent implements OnInit {

  @Input()
  showNewPayment = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddPayment(){
    this.showNewPayment = false;
  }

  onCancel(){
    this.showNewPayment = false;
  }
}
