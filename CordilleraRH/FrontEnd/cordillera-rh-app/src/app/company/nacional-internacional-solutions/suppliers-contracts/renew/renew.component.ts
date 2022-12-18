import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {

  @Input()
  showRenew = false;

  @ViewChild('renewForm')
  renewForm: NgForm;

  untilClientCloseContract= false;

  isRenovatedFailed = false;
  isRenovatedSuccefully = false;

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

  onRenew(){
    this.isLoading = true;
    this.isRenovatedSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isRenovatedSuccefully = false;
      this.showRenew = false;
    }, 2000);
  }

  onCancel(){
    this.showRenew = false;
  }

}
