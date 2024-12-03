import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h1 class="page-title">Bem-vindo ao Spin Play!</h1>
      <div class="hero-content">
        <p>Descubra um novo jogo a cada sorteio</p>
        <a routerLink="/consoles" class="btn">Começar!</a>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 4rem 0;
    }

    .hero-content {
      margin-top: 2rem;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  `]
})
export class HomeComponent {}