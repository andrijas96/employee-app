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
    console.log('ok');
    this.showNewTaskForm = true;
  }

  handleAdd(event: Task) {
    console.log('handleAdd: ', event);
    this.tasksService.addTask(event).then((data: Task) => {
      this.tasks.unshift(data);
      // this.tasks.unshift
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
