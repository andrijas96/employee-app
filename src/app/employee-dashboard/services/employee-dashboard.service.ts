import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employee.interface';

const EMPLOYEES_API = ' http://localhost:3000/employees';

@Injectable()
export class EmployeesService {
  constructor(private http: HttpClient) {}

  async getEmployees(): Promise<Employee[]> {
    return this.http.get(EMPLOYEES_API).toPromise() as Promise<Employee[]>;
  }

  async getEmployee(id: number): Promise<Employee> {
    return this.http
      .get(`${EMPLOYEES_API}/${id}`)
      .toPromise() as Promise<Employee>;
  }

  async updateEmployee(employee: Employee): Promise<Employee> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers,
    };

    return this.http
      .put(`${EMPLOYEES_API}/${employee.id}`, employee, options)
      .toPromise() as Promise<Employee>;
  }

  async addEmployee(employee: Employee): Promise<Employee> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers,
    };

    return this.http
      .post(`${EMPLOYEES_API}`, employee, options)
      .toPromise() as Promise<Employee>;
  }

  async removeEmployee(employee: Employee): Promise<Employee> {
    return this.http
      .delete(`${EMPLOYEES_API}/${employee.id}`)
      .toPromise() as Promise<Employee>;
  }
}
