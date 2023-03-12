import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { Task } from '../../models/task.interface';
import { EmployeesService } from '../../services/employee-dashboard.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  employees!: Employee[];
  filteredEmployees: Employee[] = [];
  showOptions: boolean = false;
  asignee: Employee = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: undefined,
    dateOfBirth: undefined,
    salary: 0,
  };
  @Input() detail!: Task;

  @Output() update: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().then((data: Employee[]) => {
      this.employees = data;
    });
  }

  filterEmployees(event: any) {
    // console.log(event.target.value);
    if (event.target.value.length >= 2) {
      this.showOptions = true;
      this.filteredEmployees = this.employees.filter((employee: Employee) => {
        return employee.fullName
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
    } else if (event.target.value.length < 2) {
      this.filteredEmployees = [];
      this.showOptions = false;
    }
  }

  setAsignee(employee: Employee) {
    this.detail.asignee = employee.fullName;
    this.showOptions = false;
  }

  onSubmit(task: Task, isValid: boolean | null) {
    console.log(task, isValid);
    if (isValid) {
      task.id = this.detail.id;
      this.update.emit(task);
    }
  }
}
