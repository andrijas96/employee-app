import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employee-dashboard.service';

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.scss'],
})
export class EmployeeViewerComponent implements OnInit {
  employee: Employee = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: undefined,
    dateOfBirth: undefined,
    salary: undefined,
    tasksCompleted: 0,
  };

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.employeesService
        .getEmployee(param['id'])
        .then((data: Employee) => (this.employee = data));
    });
  }

  onUpdateEmployee(event: Employee) {
    this.employeesService.updateEmployee(event).then((data: Employee) => {
      this.employee = Object.assign({}, this.employee, event);
      this.router.navigate(['employees']);
    });
  }
}
