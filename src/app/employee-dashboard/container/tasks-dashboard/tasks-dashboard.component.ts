import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks-dashboard.service';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss'],
})
export class TasksDashboardComponent implements OnInit {
  tasks: Task[] = [];
  showNewTaskForm: boolean = false;
  constructor(private tasksService: TasksService) {}

  async ngOnInit(): Promise<void> {
    this.tasks = await this.tasksService.getTasks();
  }

  addTask() {
    this.showNewTaskForm = true;
  }

  getFreeTaskId() {
    let id =
      Math.max.apply(
        null,
        this.tasks.map((c) => c.id)
      ) + 1;

    return id;
  }

  handleAdd(event: Task) {
    event.id = this.getFreeTaskId();
    this.tasksService.addTask(event).then((data: Task) => {
      this.tasks.unshift(data);
    });
    this.showNewTaskForm = false;
  }

  handleRemove(event: Task) {
    this.tasksService.removeTask(event).then((data) => {
      this.tasks = this.tasks.filter((task: Task) => {
        return task.id !== event.id;
      });
    });
  }
}
