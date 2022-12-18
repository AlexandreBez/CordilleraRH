import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internacional-partnership',
  templateUrl: './internacional-partnership.component.html',
  styleUrls: ['./internacional-partnership.component.css']
})
export class InternacionalPartnershipComponent implements OnInit {

  showDeleteRecord = false;
  showPartnershipDetails = false;
  showEdit = false;
  showTerminationPartnership = false;
  showNewPartnership = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowPartnershipDetails(){
    this.showPartnershipDetails = true;
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

  onShowEdit(){
    this.showEdit = true;
  }

  onShowTerminationPartnership(){
    this.showTerminationPartnership = true;
  }

  onShowNewPartnership(){
    this.showNewPartnership = true;
  }

}
