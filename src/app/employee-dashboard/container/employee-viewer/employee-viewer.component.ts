import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Employee } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employee-dashboard.service';

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.scss'],
})
export class EmployeeViewerComponent implements OnInit {
  employee!: Employee;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
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
    });
  }
}
