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
  showPrompt: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  prompt() {
    this.showPrompt = true;
  }
  removeTask() {
    this.showPrompt = false;
    this.remove.emit(this.detail);
  }
}
