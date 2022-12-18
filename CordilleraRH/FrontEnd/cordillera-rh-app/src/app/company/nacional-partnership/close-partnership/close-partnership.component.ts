import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-partnership',
  templateUrl: './close-partnership.component.html',
  styleUrls: ['./close-partnership.component.css']
})
export class ClosePartnershipComponent implements OnInit {

  @Input()
  showTerminationPartnership = true;

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
      this.showTerminationPartnership = false;
    }, 2000);
  }

  onCancelTerminationFilesSupplier(){
    this.showTerminationPartnership = false;
  }

}
