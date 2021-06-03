import './game.scss';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { TimerWrapper } from '../page/gamePage/timer-wrapper/timer-wrapper';
import { TimerField } from '../page/gamePage/timer-wrapper/timer/timer';
// import { TimerButton } from '../page/gamePage/timer-wrapper/timer-btn/timer-btn';
import { ModalPage } from '../page/modalPage/modalPage';

const FLIP_DELAY = 2000;

export class Game extends BaseComponent {
  private counter = 0;

  private readonly modalPage: ModalPage;

  private timer_wrapper: TimerWrapper;

  private timer_field: TimerField;

  // private timerButton: TimerButton;

  private readonly cardsField = new CardsField();

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['game']);
    this.modalPage = new ModalPage();
    this.timer_wrapper = new TimerWrapper();
    this.timer_field = new TimerField();
    // this.timerButton = new TimerButton();
    this.cardsField = new CardsField();
    this.element.appendChild(this.timer_wrapper.element);
    this.timer_wrapper.element.appendChild(this.timer_field.element);
    // this.timer_wrapper.element.appendChild(this.timerButton.element);
    this.element.appendChild(this.cardsField.element);
  }

  private static сhangeWidthFieldCards(): void {
    const cardsField = document.querySelector('.cards-field');
    const DIFFICULT_CAME_TEMP: string | number | null =
      localStorage.getItem('select-diffculty');
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

  private pauseFieledOfTimer(): void {
    const timerBtn = document.querySelector('.timer-btn');
    this.timer_field.startStop();

    timerBtn?.addEventListener('click', () => {
      if (this.isAnimation) {
        this.isAnimation = false;
      } else {
        this.isAnimation = true;
      }
    });
  }

  newGame(images: string[], diffculty: number) {
    this.pauseFieledOfTimer();
    Game.сhangeWidthFieldCards();
    this.cardsField.clear();
    const imagesForGame = images.slice(0, (diffculty * diffculty) / 2);
    const cards = imagesForGame
      .concat(imagesForGame)
      .map(url => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
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
      this.counter++;
    } else {
      this.activeCard.element.classList.add('check-yes');
      card.element.classList.add('check-yes');
    }
    this.activeCard = undefined;
    this.isAnimation = false;

    const isCardOpenAll: boolean = this.cardsField.cards.every(
      elem => elem.isFlipped === false,
    );
    const gameYes = Number(localStorage.getItem('select-diffculty'));
    if (isCardOpenAll) {
      this.timer_field.stop();
      const MODALPAGE: Element | null =
        document.querySelector('.modal-page-score');
      MODALPAGE?.classList.remove('hidden');
      if (
        (gameYes * 2 - this.counter) * 100 -
          this.timer_field.startTimer() * 10 <
        0
      ) {
        localStorage.setItem('score', '0');
      } else {
        localStorage.setItem(
          'score',
          `${
            (gameYes * 2 - this.counter) * 100 -
            this.timer_field.startTimer() * 10
          }
          `,
        );
      }
      const score: Element | null = document.querySelector('.score__text');
      score!.textContent = `Congratulations.You win with score
      ${localStorage.getItem('score')}
      `;
    }
  }
}
