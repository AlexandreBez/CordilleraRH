import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css'],
})
export class ManageCompanyComponent implements OnInit {
  companys = [
    {
      id: 1,
      name: 'My company',
      country: 'Portugal',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
