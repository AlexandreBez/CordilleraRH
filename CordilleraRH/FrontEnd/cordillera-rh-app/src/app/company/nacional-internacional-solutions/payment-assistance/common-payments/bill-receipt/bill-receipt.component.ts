import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-receipt',
  templateUrl: './bill-receipt.component.html',
  styleUrls: ['./bill-receipt.component.css']
})
export class BillReceiptComponent implements OnInit {

  @Input()
  showBillReceiptDetails = false;

  isDownloadedSuccefully = false;
  isDownloadedFailed = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseBillDetails(){
    this.showBillReceiptDetails = false;
  }

  downloadReceipAndFiles(){
    this.isDownloadedSuccefully = true;
    setTimeout(() => {
      this.isDownloadedSuccefully = false;
    }, 2000);
  }

}
