import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  @Input()
  showDeleteRecord = false;

  isLoading = false;
  isDeletedSuccefully = false;
  isDeletedFailed = false;

  passwordInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteRecord(){
    this.isLoading = true;
    this.isDeletedSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isDeletedSuccefully = false;
      this.showDeleteRecord = false;
    }, 2000);
  }

  onCancelDeleteRecord(){
    this.showDeleteRecord = false;
  }
}
