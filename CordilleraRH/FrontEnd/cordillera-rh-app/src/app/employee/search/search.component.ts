import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  showUpdate = false;
  showDetails = false;
  showDeleteRecord = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowUpdate(){
    this.showUpdate = true;
  }

  onShowDetails(){
    this.showDetails = true;
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

  onSearchEmployee(){

  }

}
