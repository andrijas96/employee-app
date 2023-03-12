import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task.interface';

// const TASKS_API = '/assets/db.json';
const TASKS_API = ' http://localhost:3000/Tasks';

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  async getTasks(): Promise<Task[]> {
    return this.http.get(TASKS_API).toPromise() as Promise<Task[]>;
  }

  async getTask(id: number): Promise<Task> {
    return this.http.get(`${TASKS_API}/${id}`).toPromise() as Promise<Task>;
  }

  async updateTask(Task: Task): Promise<Task> {
    // Promise<Task>

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers,
    };

    console.log('async updateTask:', Task);
    return this.http
      .put(`${TASKS_API}/${Task.id}`, Task, options)
      .toPromise() as Promise<Task>;
  }

  async addTask(Task: Task): Promise<Task> {
    console.log('Add Task:', Task);
    // console.log(await this.getFreeTaskId());
    Task.id = await this.getFreeTaskId();

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers,
    };

    return this.http
      .post(`${TASKS_API}`, Task, options)
      .toPromise() as Promise<Task>;
  }

  async getFreeTaskId(): Promise<number> {
    let id = 1;
    (await this.getTasks()).forEach((a) => (a.id == id ? id++ : id));

    return id;
  }
  async removeTask(task: Task): Promise<Task> {
    return this.http
      .delete(`${TASKS_API}/${task.id}`)
      .toPromise() as Promise<Task>;
  }
}
