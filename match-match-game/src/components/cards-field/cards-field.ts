import Card from '../card/card';
import BaseComponent from '../base-components';
import './cards-field.scss';

/**
 * TIME_SHOW_CARDS_BEFORE_GAME_IN_SECONDS - waiting time for viewing cards
 */
const TIME_SHOW_CARDS_BEFORE_GAME_IN_SECONDS = 31000;

export default class CardsField extends BaseComponent {
  public cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));

    setTimeout(() => {
      this.cards.forEach(card => card.flipToBack());
    }, TIME_SHOW_CARDS_BEFORE_GAME_IN_SECONDS);
  }
}
