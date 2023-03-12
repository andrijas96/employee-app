import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  @Input() detail!: Task;
  @Output() remove: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
  editTask() {}
  removeTask() {
    this.remove.emit(this.detail);
  }
}
