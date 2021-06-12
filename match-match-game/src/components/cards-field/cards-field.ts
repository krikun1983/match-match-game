import { Card } from '../card/card';
import { BaseComponent } from '../base-components';
import './cards-field.scss';

/**
 * SHOW_TIME - waiting time for viewing cards
 */
const SHOW_TIME = 31;

export class CardsField extends BaseComponent {
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
    }, SHOW_TIME * 1000);
  }
}
