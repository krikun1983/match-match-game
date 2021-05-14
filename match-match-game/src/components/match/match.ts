import { BaseComponent } from '../base-components';
import './match.scss';

export class Match extends BaseComponent {
  constructor() {
    super('div', ['match']);
    this.element.innerHTML = `
    <p class="match__text">match</p>
    <button class="match__btn">match</button>
    `;
  }
}
