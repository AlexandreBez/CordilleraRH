import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employees: any;
  saveIdForDelete!: number;
  successAlert: boolean = false;

  constructor(
    private employeeService: EmployeeService 
  ) { }

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }

  onUpdateEmployee(id: number){
    return id;
  }

  deleteConfirmed(){
    this.employeeService.deleteEmployees(this.saveIdForDelete);
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
