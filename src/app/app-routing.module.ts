import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/container/employee-dashboard/employee-dashboard.component';
import { EmployeeViewerComponent } from './employee-dashboard/container/employee-viewer/employee-viewer.component';
import { TaskViewerComponent } from './employee-dashboard/container/task-viewer/task-viewer.component';
import { TasksDashboardComponent } from './employee-dashboard/container/tasks-dashboard/tasks-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    children: [
      { path: '', component: EmployeeDashboardComponent },
      { path: ':id', component: EmployeeViewerComponent },
    ],
  },
  {
    path: 'tasks',
    children: [
      { path: '', component: TasksDashboardComponent },
      { path: ':id', component: TaskViewerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
