import BaseComponent from '../../base-components';

import './header-match.scss';

export default class HeaderMatch extends BaseComponent {
  constructor() {
    super('div', ['match']);
    this.element.innerHTML = `
      <p class="header-match__text">match</p>
      <h1 class="header-match__heading">match</h1>
    `;
  }
}
