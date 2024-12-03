import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Console, Game } from '../../models/console.model';

@Component({
  selector: 'app-consoles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="consoles-container">
      <h1 class="page-title">Escolha seu Console</h1>
      
      <div class="select-container">
        <select 
          [(ngModel)]="selectedConsoleId" 
          (change)="onConsoleSelect()"
          class="select-custom">
          <option value="">Selecione um console</option>
          <option *ngFor="let console of consoles" [value]="console.id">
            {{ console.name }} ({{ console.year }})
          </option>
        </select>
      </div>

      <div *ngIf="selectedConsoleId" class="randomize-container">
        <button 
          (click)="randomizeGame()"
          class="btn-randomize"
          [class.pulse]="!selectedGame">
          Sorteie!
        </button>
      </div>

      <div *ngIf="selectedGame" class="game-result">
        <h2>Jogo Sorteado:</h2>
        <div class="game-card">
          <img [src]="selectedGame.imageUrl" [alt]="selectedGame.title">
          <h3>{{ selectedGame.title }}</h3>
          <p>{{ selectedGame.genre }} ({{ selectedGame.releaseYear }})</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .consoles-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }

    .select-container {
      width: 100%;
      max-width: 400px;
      margin: 2rem 0;
    }

    .randomize-container {
      margin: 2rem 0;
    }

    .btn-randomize {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Press Start 2P';
    }

    .btn-randomize:hover {
      transform: scale(1.1);
      background: var(--secondary-color);
    }

    .pulse {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    .game-result {
      margin-top: 2rem;
      text-align: center;
    }

    .game-card {
      background: #2a2a2a;
      padding: 1rem;
      border-radius: 10px;
      margin-top: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .game-card img {
      max-width: 300px;
      border-radius: 5px;
    }

    .game-card h3 {
      margin: 1rem 0;
      color: var(--primary-color);
    }
  `]
})
export class ConsolesComponent {
  consoles: Console[] = [];
  selectedConsoleId: number | null = null;
  selectedGame: Game | null = null;

  constructor(private gameService: GameService) {
    this.consoles = this.gameService.getConsoles();
  }

  onConsoleSelect() {
    this.selectedGame = null;
  }

  randomizeGame() {
    if (this.selectedConsoleId) {
      this.selectedGame = this.gameService.getRandomGame(+this.selectedConsoleId);
    }
  }
}