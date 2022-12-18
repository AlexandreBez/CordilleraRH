import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-detail-company',
  templateUrl: './full-detail-company.component.html',
  styleUrls: ['./full-detail-company.component.css']
})
export class FullDetailCompanyComponent implements OnInit{

  @Input()
  showDetails = false;

  constructor(
  ) { }

  ngOnInit(){
  }
  
  onCloseCompanyDetail(){
    this.showDetails = false;
  }

}