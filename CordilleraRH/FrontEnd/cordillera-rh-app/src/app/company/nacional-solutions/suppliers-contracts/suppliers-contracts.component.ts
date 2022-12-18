import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-contracts',
  templateUrl: './suppliers-contracts.component.html',
  styleUrls: ['./suppliers-contracts.component.css']
})
export class SuppliersContractsComponent implements OnInit {

  showSupplierDetails = false;
  showRenew = false;
  showEdit = false;
  showTerminationSuppliers = false;
  showDeleteRecord = false;
  showNewSupplier = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetails(){
    this.showSupplierDetails = true;
  }

  onShowRenew(){
    this.showRenew = true;
  }

  onShowEdit(){
    this.showEdit = true;
  }

  onShowTerminationSuppliers(){
    this.showTerminationSuppliers = true;
  }

  onShowDeleteRecord(){
    this.showDeleteRecord = true;
  }

  onShowNewSupplier(){
    this.showNewSupplier = true; 
  }
  
}
