import { Injectable } from '@angular/core';
import { Console, Game } from '../models/console.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private consoles: Console[] = [
    {
      id: 1,
      name: 'NES',
      year: 1985,
      games: [
        {
          id: 1,
          title: 'Super Mario Bros',
          releaseYear: 1985,
          genre: 'Platform',
          imageUrl: 'https://example.com/mario.jpg'
        },
        {
          id: 2,
          title: 'The Legend of Zelda',
          releaseYear: 1986,
          genre: 'Action-Adventure',
          imageUrl: 'https://example.com/zelda.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'PlayStation 5',
      year: 2020,
      games: [
        {
          id: 3,
          title: 'Demon\'s Souls',
          releaseYear: 2020,
          genre: 'Action RPG',
          imageUrl: 'https://example.com/demons-souls.jpg'
        }
      ]
    }
  ];

  getConsoles(): Console[] {
    return this.consoles;
  }

  getRandomGame(consoleId: number): Game | null {
    const selectedConsole = this.consoles.find(c => c.id === consoleId);
    if (!selectedConsole || selectedConsole.games.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * selectedConsole.games.length);
    return selectedConsole.games[randomIndex];
  }
}