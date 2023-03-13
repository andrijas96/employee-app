// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

//containers
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TasksDashboardComponent } from './container/tasks-dashboard/tasks-dashboard.component';
import { EmployeeViewerComponent } from './container/employee-viewer/employee-viewer.component';
import { TaskViewerComponent } from './container/task-viewer/task-viewer.component';

//components
import { EmployeeDashboardComponent } from './container/employee-dashboard/employee-dashboard.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NewEmployeeFormComponent } from './components/new-employee-form/new-employee-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';

//services
import { EmployeesService } from './services/employee-dashboard.service';
import { TasksService } from './services/tasks-dashboard.service';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeDetailComponent,
    EmployeeViewerComponent,
    EmployeeFormComponent,
    NewEmployeeFormComponent,
    TasksDashboardComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskViewerComponent,
    NewTaskFormComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  providers: [EmployeesService, TasksService],
  exports: [EmployeeDashboardComponent],
})
export class EmployeeDashboardModule {}
