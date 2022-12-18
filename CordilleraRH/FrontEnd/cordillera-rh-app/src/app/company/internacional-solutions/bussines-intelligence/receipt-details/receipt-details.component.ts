import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {

  @Input()
  showBIRequest = false;
  isLoading = false;

  isDownloadedSuccefully = false;
  isDownloadedFailed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onCloseBillDetails(){
    this.showBIRequest = false;
  }

  downloadReceipAndFiles(){
    this.isDownloadedSuccefully = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isDownloadedSuccefully = false;
      this.isLoading = false;
    }, 2000);
  }

}
