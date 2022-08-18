import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person = {
    name: "John Doe"
  };

  timeNow: string = new Intl.DateTimeFormat('en-GB').format();

  constructor() { }

  ngOnInit() {
  }

}
