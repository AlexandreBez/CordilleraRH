import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  showEdit = false;

  isEditedSuccefully = false;
  isEditedFailed = false;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    this.isLoading = true;
    this.isEditedSuccefully = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isEditedSuccefully = false;
      this.showEdit = false;
    }, 2000);

  }

  onCancel(){
    this.showEdit = false;
  }

}
