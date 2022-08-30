import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Company.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css'],
})
export class ManageCompanyComponent implements OnInit {
  companys: any;
  saveIdForDelete!: number;
  successAlert: boolean = false;

  constructor(
    private companyService: CompanyService
  ){}

  ngOnInit(){
    this.companys = this.companyService.getCompanys();
  }

  deleteConfirmed(){
    this.companyService.deleteCompany(this.saveIdForDelete);
    this.successAlert = true;
    setTimeout(
      () => {
        this.successAlert = false;
      }, 2000
    )
  }

  getIdDelete(id: number){
    return this.saveIdForDelete = id;
  }
  
}
