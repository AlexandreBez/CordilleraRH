import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacional-internacional-partnership',
  templateUrl: './nacional-internacional-partnership.component.html',
  styleUrls: ['./nacional-internacional-partnership.component.css']
})
export class NacionalInternacionalPartnershipComponent implements OnInit {

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
