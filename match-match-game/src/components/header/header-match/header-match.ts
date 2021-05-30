import { BaseComponent } from '../../base-components';
import './header-match.scss';

export class HeaderMatch extends BaseComponent {
  constructor() {
    super('div', ['match']);
    this.element.innerHTML = `
    <p class="header-match__text">match</p>
    <p class="header-match__btn">match</p>
    `;
  }
}
