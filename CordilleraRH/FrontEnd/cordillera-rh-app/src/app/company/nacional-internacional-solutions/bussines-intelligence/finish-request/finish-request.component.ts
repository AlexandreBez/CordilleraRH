import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-finish-request',
  templateUrl: './finish-request.component.html',
  styleUrls: ['./finish-request.component.css']
})
export class FinishRequestComponent implements OnInit {

  @Input()
  showFinishRequest = false;

  @ViewChild('finishRequestForm')
  finishRequestForm: NgForm;

  isFinishedSuccefully = false;
  isFinishedFailed = false;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFinishRequest(){
    this.isFinishedSuccefully = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isFinishedSuccefully = false;
      this.isLoading = false;
      this.showFinishRequest = false;
    }, 2000);
  }

  onCancelFinishRequest(){
    this.finishRequestForm.reset();
    this.showFinishRequest = false;
  }

}
