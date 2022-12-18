import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacional-partnership',
  templateUrl: './nacional-partnership.component.html',
  styleUrls: ['./nacional-partnership.component.css']
})
export class NacionalPartnershipComponent implements OnInit {

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
