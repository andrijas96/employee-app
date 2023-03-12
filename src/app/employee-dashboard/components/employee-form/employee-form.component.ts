import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  constructor() {}

  @Input() detail!: Employee;

  @Output() update: EventEmitter<Employee> = new EventEmitter<Employee>();

  ngOnInit(): void {}

  handleSubmit(employee: Employee, isValid: boolean | any) {
    if (isValid) {
      employee.id = this.detail.id;
      this.update.emit(employee);
    }
  }
}
