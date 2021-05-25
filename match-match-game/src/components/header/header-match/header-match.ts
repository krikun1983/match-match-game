import { BaseComponent } from '../../base-components';
import './header-match.scss';

export class HeaderMatch extends BaseComponent {
  constructor() {
    super('div', ['match']);
    this.element.innerHTML = `
    <p class="header-match__text">match</p>
    <a class="header-match__btn" href="#/game">match</a>
    `;
  }
}
