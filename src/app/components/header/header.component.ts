import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <h1>GameRoulette</h1>
        </div>
        <nav class="nav-menu">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/consoles" routerLinkActive="active">Consoles</a>
          <a routerLink="/about" routerLinkActive="active">Sobre</a>
          <a routerLink="/achievements" routerLinkActive="active">Conquistas</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #1a1a1a;
      padding: 1rem 0;
      border-bottom: 3px solid var(--primary-color);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      color: var(--primary-color);
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
    }

    .nav-menu a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 0.8rem;
      transition: color 0.3s ease;
    }

    .nav-menu a:hover, .nav-menu a.active {
      color: var(--primary-color);
    }
  `]
})
export class HeaderComponent {}