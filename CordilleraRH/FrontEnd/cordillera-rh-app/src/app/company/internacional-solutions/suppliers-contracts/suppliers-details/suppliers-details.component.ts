import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-details',
  templateUrl: './suppliers-details.component.html',
  styleUrls: ['./suppliers-details.component.css']
})
export class SuppliersDetailsComponent implements OnInit {

  @Input()
  showSupplierDetails = false;

  @Input()
  supplierId: number = null;

  constructor() { }

  ngOnInit() {
  }

  onCloseSupplierDetail(){
    this.showSupplierDetails = false;
    this.supplierId = null;
  }

}
