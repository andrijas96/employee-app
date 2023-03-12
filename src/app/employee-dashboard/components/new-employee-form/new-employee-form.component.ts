import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employee-dashboard.service';

@Component({
  selector: 'new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss'],
})
export class NewEmployeeFormComponent implements OnInit {
  detail: Employee = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: 123,
    dateOfBirth: new Date(),
    salary: 0,
  };

  constructor(private employeesService: EmployeesService) {}

  @Output() add: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit(): void {}

  handleSubmit(employee: Employee, isValid: boolean | any) {
    if (isValid) {
      this.add.emit(employee);
    }
  }

  closeForm() {
    this.close.emit();
  }
}
