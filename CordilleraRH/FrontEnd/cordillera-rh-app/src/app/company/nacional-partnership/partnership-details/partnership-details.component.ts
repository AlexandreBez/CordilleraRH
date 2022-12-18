import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnership-details',
  templateUrl: './partnership-details.component.html',
  styleUrls: ['./partnership-details.component.css']
})
export class PartnershipDetailsComponent implements OnInit {

  @Input()
  showPartnershipDetails = false;

  constructor() { }

  ngOnInit() {
  }

  onClosePartnershipDetail(){
    this.showPartnershipDetails = false;
  }

}
