import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-government-payments',
  templateUrl: './government-payments.component.html',
  styleUrls: ['./government-payments.component.css']
})
export class GovernmentPaymentsComponent implements OnInit {

  showDeleteRecord = false;
  showBillReceiptDetails = false;
  showNewPaymentRecord = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

  onShowReceipt(){
    this.showBillReceiptDetails = true;
  }

  onBackToPaymentAssitance(){
    this.router.navigate(['NacionalSolutions/PaymentAssistance']);
  }

  onShowNewPaymentRecord(){
    this.showNewPaymentRecord = true;
  }

}
