import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks-dashboard.service';

@Component({
  selector: 'task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.scss'],
})
export class TaskViewerComponent implements OnInit {
  task!: Task;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.tasksService
        .getTask(param['id'])
        .then((data: Task) => (this.task = data));
    });
  }
  onUpdateTask(event: Task) {
    this.tasksService.updateTask(event).then((data: Task) => {
      this.task = Object.assign({}, this.task, event);
    });
    // console.log(event);
  }
}
