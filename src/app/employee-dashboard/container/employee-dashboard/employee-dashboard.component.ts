import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee-dashboard/models/employee.interface';
import { EmployeesService } from '../../services/employee-dashboard.service';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  employees: Employee[] = [];
  showNewEmployeeForm: boolean = false;
  constructor(private employeesService: EmployeesService) {}

  async ngOnInit(): Promise<void> {
    this.employees = await this.employeesService.getEmployees();
    console.log(this.employees);
  }

  addEmployee() {
    this.showNewEmployeeForm = true;
  }

  handleAdd(event: Employee) {
    this.employeesService.addEmployee(event).then((data: Employee) => {
      this.employees.unshift(data);
    });
    this.showNewEmployeeForm = false;
  }

  handleRemove(event: Employee) {
    this.employeesService.removeEmployee(event).then((data) => {
      this.employees = this.employees.filter((employee: Employee) => {
        console.log(event.id);
        return employee.id !== event.id;
      });
    });
  }
}
