import './game.scss';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Timer } from '../page/gamePage/timer/timer';

const FLIP_DELAY = 3000;

export class Game extends BaseComponent {
  private timer: Timer;

  private readonly cardsField = new CardsField();

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['game']);
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  private static addWigthField(): void {
    const cardsField = document.querySelector('.cards-field');
    const DIFFICULT_CAME_TEMP: string | number | null = localStorage.getItem('select-diffculty');
    if (DIFFICULT_CAME_TEMP === '3') {
      cardsField?.classList.add('cards-field_three');
    }
    if (DIFFICULT_CAME_TEMP === '4') {
      cardsField?.classList.add('cards-field_four');
    }
    if (DIFFICULT_CAME_TEMP === '6') {
      cardsField?.classList.add('cards-field_six');
    }
  }

  private pause(): void {
    const btnpause = document.querySelector('.header-match__btn');
    btnpause?.addEventListener('click', () => {
      this.isAnimation = true;
    });
  }

  newGame(images: string[], diffculty: number) {
    this.timer.start();
    this.pause();
    Game.addWigthField();
    this.cardsField.clear();
    const imagesForGame = images.slice(0, (diffculty * diffculty) / 2);
    const cards = imagesForGame
      .concat(imagesForGame)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.element.classList.add('check-no');
      card.element.classList.add('check-no');
      await delay(FLIP_DELAY);
      this.activeCard.element.classList.remove('check-no');
      card.element.classList.remove('check-no');
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.activeCard.element.classList.add('check-yes');
      card.element.classList.add('check-yes');
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
