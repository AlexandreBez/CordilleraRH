import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-register',
  templateUrl: './delete-register.component.html',
  styleUrls: ['./delete-register.component.css']
})
export class DeleteRegisterComponent implements OnInit {

  @Input()
  showDeleteRecord = false;

  isDeletedSuccefully = false;
  isDeletedFailed = false;
  isLoading = false;

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
