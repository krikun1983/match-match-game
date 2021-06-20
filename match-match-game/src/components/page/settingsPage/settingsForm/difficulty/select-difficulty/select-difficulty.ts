import SettingsGame from '../../../../../../constants/card-images-game';
import BaseComponent from '../../../../../base-components';
import './select-difficulty.scss';

export default class SelectDifficulty extends BaseComponent {
  public index = localStorage.getItem(SettingsGame.difficulty);

  constructor() {
    super('select', ['select-difficulty']);
    this.element.innerHTML = `
      <option value="3">3x3</option>
      <option value="4" selected="${this.index === '4'}">4x4</option>
      <option value="6">6x6</option>
    `;

    this.element.addEventListener('change', (): void => {
      this.index = (this.element as HTMLSelectElement).value;
      localStorage.setItem(SettingsGame.difficulty, this.index);
    });
  }
}
