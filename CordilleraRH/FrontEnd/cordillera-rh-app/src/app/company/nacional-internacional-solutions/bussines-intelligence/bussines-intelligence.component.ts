import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussines-intelligence',
  templateUrl: './bussines-intelligence.component.html',
  styleUrls: ['./bussines-intelligence.component.css']
})
export class BussinesIntelligenceComponent implements OnInit {

  showBIDetails = false;
  showFinishRequest = false;
  showDeleteRecord = false;
  showNewBIRequest = false;
  showEditRequest = false;

  constructor() {}

  ngOnInit(): void {
  }

  onShowDetails(){
    this.showBIDetails = true;
  }

  onShowFinishRequest(){
    this.showFinishRequest = true;
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

  onShowNewBIRequest(){
    this.showNewBIRequest = true;
  }

  onShowEditRequest(){
    this.showEditRequest = true;
  }
}
