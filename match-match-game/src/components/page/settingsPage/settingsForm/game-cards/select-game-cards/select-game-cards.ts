import SettingsGame from '../../../../../../constants/card-images-game';
import BaseComponent from '../../../../../base-components';
import './select-game-cards.scss';

export default class SelectGameCards extends BaseComponent {
  public index = localStorage.getItem(SettingsGame.cardImages);

  constructor() {
    super('select', ['select-game-cards']);
    this.element.innerHTML = `
      <option value="0" selected="${this.index === '0'}">animals</option>
      <option value="1">toys</option>
    `;

    this.element.addEventListener('change', (): void => {
      this.index = (this.element as HTMLSelectElement).value;
      localStorage.setItem(SettingsGame.cardImages, this.index);
    });
  }
}
