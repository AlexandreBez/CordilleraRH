import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
})
export class EditCompanyComponent implements OnInit {

  @ViewChild('updateForm')
  updateForm?: NgForm;

  @Input()
  showUpdate = false;
  
  constructor(
  ) { }

  ngOnInit() {
  }

  onUpdateCompany() {
    this.showUpdate = false;
  }

  onCancelUpdate(){
    this.showUpdate = false;
  }
}
