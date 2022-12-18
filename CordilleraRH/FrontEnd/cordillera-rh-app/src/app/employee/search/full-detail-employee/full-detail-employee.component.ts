import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-detail-employee',
  templateUrl: './full-detail-employee.component.html',
  styleUrls: ['./full-detail-employee.component.css']
})
export class FullDetailEmployeeComponent implements OnInit{

  @Input()
  showDetails = false;

  constructor(
  ) { }

  ngOnInit(){
  }
  
  onCloseEmployeeDetail(){
    this.showDetails = false;
  }

}