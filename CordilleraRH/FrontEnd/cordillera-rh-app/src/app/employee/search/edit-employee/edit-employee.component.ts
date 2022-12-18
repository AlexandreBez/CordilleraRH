import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {

  @ViewChild('updateForm')
  updateForm?: NgForm;

  @Input()
  showUpdate = false;
  
  constructor(
  ) { }

  ngOnInit() {
  }

  onUpdateEmployee() {
    this.showUpdate = false;
  }

  onCancelUpdate(){
    this.showUpdate = false;
  }
}
