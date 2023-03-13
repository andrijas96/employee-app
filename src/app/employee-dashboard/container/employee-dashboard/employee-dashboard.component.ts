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
  }

  addEmployee() {
    this.showNewEmployeeForm = true;
  }

  getFreeEmployeeId() {
    let id =
      Math.max.apply(
        null,
        this.employees.map((c) => c.id)
      ) + 1;

    return id;
  }

  handleAdd(event: Employee) {
    event.id = this.getFreeEmployeeId();
    event.tasksCompleted = 0;
    this.employeesService.addEmployee(event).then((data: Employee) => {
      this.employees.unshift(data);
    });
    this.showNewEmployeeForm = false;
  }

  handleRemove(event: Employee) {
    this.employeesService.removeEmployee(event).then((data) => {
      this.employees = this.employees.filter((employee: Employee) => {
        return employee.id !== event.id;
      });
    });
  }

  sortTop() {
    this.employees = this.employees
      .sort((a, b) => b.tasksCompleted - a.tasksCompleted)
      .slice(0, 5);
  }
}
