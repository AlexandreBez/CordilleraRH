import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-payments',
  templateUrl: './common-payments.component.html',
  styleUrls: ['./common-payments.component.css']
})
export class CommonPaymentsComponent implements OnInit {

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
