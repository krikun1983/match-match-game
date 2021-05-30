import { BaseComponent } from '../../../../base-components';
import './form-settings-game-cards.scss';
import { SelectGameCards } from './select-game-cards/select-game-cards';

export class FormSettingsGameCards extends BaseComponent {
  private readonly selectGameCards: SelectGameCards;

  constructor() {
    super('div', ['form-settings-game-cards']);
    this.element.innerHTML = `
      <label class="form-settings__label" for="game-cards">Game cards</label>
    `;
    this.selectGameCards = new SelectGameCards();
    this.element.appendChild(this.selectGameCards.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
