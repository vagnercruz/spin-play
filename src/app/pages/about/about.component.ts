import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container container">
      <h1 class="page-title">Sobre o GameRoulette</h1>
      
      <div class="about-content">
        <section class="about-section">
          <h2>Nossa Missão</h2>
          <p>
            O GameRoulette nasceu da paixão por jogos e da dificuldade que muitos
            jogadores têm em escolher qual título jogar em seguida. Nossa missão
            é tornar a descoberta de jogos uma experiência divertida e emocionante!
          </p>
        </section>

        <section class="about-section">
          <h2>Como Funciona</h2>
          <p>
            1. Escolha sua plataforma favorita
            2. Clique no botão "Sorteie!"
            3. Descubra um novo jogo para sua próxima aventura
          </p>
        </section>

        <section class="about-section">
          <h2>Nossa Biblioteca</h2>
          <p>
            Contamos com um extenso catálogo de jogos de diversas gerações,
            desde os clássicos até os lançamentos mais recentes.
          </p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
    }

    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .about-section {
      margin-bottom: 3rem;
      background: #2a2a2a;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .about-section h2 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .about-section p {
      line-height: 1.8;
    }
  `]
})
export class AboutComponent {}