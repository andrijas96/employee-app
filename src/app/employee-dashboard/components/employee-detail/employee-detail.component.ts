import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/employee-dashboard/models/employee.interface';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() remove: EventEmitter<Employee> = new EventEmitter<Employee>();
  showPrompt: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  prompt() {
    this.showPrompt = true;
  }
  onRemove() {
    this.showPrompt = false;
    this.remove.emit(this.employee);
  }
}
