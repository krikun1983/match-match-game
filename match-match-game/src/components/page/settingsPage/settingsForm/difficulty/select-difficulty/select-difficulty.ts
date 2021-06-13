import { BaseComponent } from '../../../../../base-components';
import './select-difficulty.scss';

export class SelectDifficulty extends BaseComponent {
  public index = localStorage.getItem('difficulty-of-game');

  constructor() {
    super('select', ['select-difficulty']);
    this.element.innerHTML = `
      <option value="3x3">3x3</option>
      <option value="4x4" selected>4x4</option>
      <option value="6x6">6x6</option>
    `;
    this.element.addEventListener('change', (): void => {
      this.index = (this.element as HTMLSelectElement).value.slice(0, 1);
      localStorage.setItem('difficulty-of-game', this.index);
    });
  }
}
