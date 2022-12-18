import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-company',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchCompanyComponent implements OnInit {

  showDetails = false;
  showUpdate = false;
  showTermination = false;
  showDeleteRecord = false;

  @ViewChild('searchCompany') 
  searchCompany?: NgForm;

  constructor(
  ) { }

  ngOnInit() {
  }

  onShowDetails(){
    this.showDetails = true;
  }

  onShowEndContract(){
    this.showTermination = true;
  }

  onShowUpdate(){
    this.showUpdate = true;
  }

  onDeleteRecord(){
    this.showDeleteRecord = true; 
  }

  onSearchCompany(){

    // segunda validação
    if(this.searchCompany.value.companyName === "" && this.searchCompany.value.state === ""){
      return;
    }

    // valida os campos para pesquisar
    if(this.searchCompany.value.state === "" && this.searchCompany.value.companyName !== ""){
      // função caso apenas o nome da compania esteja preenchido
      
    }else{
      // função caso os dois estejam preenchidos

    }
  }

}
