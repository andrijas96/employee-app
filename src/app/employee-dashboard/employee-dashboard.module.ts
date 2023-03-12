import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//containers
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeViewerComponent } from './container/employee-viewer/employee-viewer.component';

//components
import { EmployeeDashboardComponent } from './container/employee-dashboard/employee-dashboard.component';

//services
import { EmployeesService } from './services/employee-dashboard.service';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NewEmployeeFormComponent } from './components/new-employee-form/new-employee-form.component';
import { TasksDashboardComponent } from './container/tasks-dashboard/tasks-dashboard.component';
import { TasksService } from './services/tasks-dashboard.service';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskViewerComponent } from './container/task-viewer/task-viewer.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';

// const routes: Routes = [
//   {
//     path: 'employees',
//     children: [
//       { path: '', component: EmployeeDashboardComponent },
//       { path: ':id', component: EmployeeViewerComponent },
//     ],
//   },
// ];

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
  // RouterModule.forChild(routes)
  imports: [CommonModule, FormsModule, AppRoutingModule],
  providers: [EmployeesService, TasksService],
  exports: [EmployeeDashboardComponent],
})
export class EmployeeDashboardModule {}
