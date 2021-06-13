import { BaseComponent } from '../../../../../base-components';
import './select-game-cards.scss';

export class SelectGameCards extends BaseComponent {
  public index = localStorage.getItem('select-game-cards');

  constructor() {
    super('select', ['select-game-cards']);
    this.element.innerHTML = `
      <option value="0" selected>animals</option>
      <option value="1">toys</option>
    `;

    this.element.addEventListener('change', (): void => {
      this.index = (this.element as HTMLSelectElement).value;
      localStorage.setItem('select-game-cards', this.index);
    });
  }
}
