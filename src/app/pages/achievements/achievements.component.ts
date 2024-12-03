import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="achievements-container container">
      <h1 class="page-title">Sistemas de Conquistas</h1>

      <div class="platforms-grid">
        <div class="platform-card" *ngFor="let platform of achievementPlatforms">
          <img [src]="platform.imageUrl" [alt]="platform.name">
          <h3>{{ platform.name }}</h3>
          <p>{{ platform.description }}</p>
          <a [href]="platform.url" target="_blank" class="btn">Acessar</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .achievements-container {
      padding: 2rem;
    }

    .platforms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .platform-card {
      background: #2a2a2a;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .platform-card img {
      width: 100px;
      height: 100px;
      margin-bottom: 1rem;
    }

    .platform-card h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .platform-card p {
      margin-bottom: 1.5rem;
    }
  `]
})
export class AchievementsComponent {
  achievementPlatforms = [
    {
      name: 'PlayStation Network',
      description: 'Sistema de troféus da Sony para jogos PlayStation',
      imageUrl: 'https://example.com/psn.jpg',
      url: 'https://www.playstation.com/trophies'
    },
    {
      name: 'Xbox Achievements',
      description: 'Sistema de conquistas da Microsoft para Xbox',
      imageUrl: 'https://example.com/xbox.jpg',
      url: 'https://www.xbox.com/achievements'
    },
    {
      name: 'Steam',
      description: 'Conquistas para jogos na plataforma Steam',
      imageUrl: 'https://example.com/steam.jpg',
      url: 'https://steamcommunity.com'
    }
  ];
}