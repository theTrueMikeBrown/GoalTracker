import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/goals" routerLinkActive="active">Personal Goals</a>
    <a routerLink="/team" routerLinkActive="active">Team</a>
  </nav>
  <router-outlet></router-outlet>
`,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Goal Tracker';
}
