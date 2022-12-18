import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  showNewPayment = false;
  showDeleteRecord = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowNewPayment(){
    this.showNewPayment = true;
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

}
