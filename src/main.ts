import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ConsolesComponent } from './app/pages/consoles/consoles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 80px);
    }
  `]
})
export class App {
  name = 'GameRoulette';
}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'consoles', component: ConsolesComponent },
  { 
    path: 'about', 
    loadComponent: () => import('./app/pages/about/about.component')
      .then(m => m.AboutComponent)
  },
  { 
    path: 'achievements', 
    loadComponent: () => import('./app/pages/achievements/achievements.component')
      .then(m => m.AchievementsComponent)
  }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});