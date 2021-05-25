import { BaseComponent } from '../../../../../base-components';
import './select-game-cards.scss';

export class SelectGameCards extends BaseComponent {
  private index = 0;

  constructor() {
    super('select', ['select-game-cards']);
    this.element.innerHTML = `
      <option selected>select game cards type</option>
      <option value="1">cars</option>
      <option value="2">peoples</option>
    `;

    this.element.addEventListener('change', (): void => {
      this.index = (<HTMLSelectElement>this.element).selectedIndex;
    })
  }
}
