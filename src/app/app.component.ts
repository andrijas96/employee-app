import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employee-app';

  nav: Nav[] = [
    { link: '/employees', name: 'Employees', exact: true },
    { link: '/tasks', name: 'Tasks', exact: false },
  ];
}
