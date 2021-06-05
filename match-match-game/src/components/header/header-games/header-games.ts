import { BaseComponent } from '../../base-components';
import './header-games.scss';

export class HeaderGamerPersons extends BaseComponent {
  constructor() {
    super('div', ['header-games']);
    this.element.appendChild(HeaderGamerPersons.renderButtonStart());
    this.element.appendChild(HeaderGamerPersons.renderButtonStop());
  }

  private static renderButtonStart() {
    const button = new BaseComponent('a', ['header-games__btn__start']);
    button.element.innerHTML = 'start game';
    button.element.setAttribute('href', '#/game');
    return button.element;
  }

  private static renderButtonStop() {
    const button = new BaseComponent('a', [
      'header-games__btn__stop',
      'hidden',
    ]);
    button.element.innerHTML = 'stop game';
    button.element.setAttribute('href', '#/about');
    return button.element;
  }
}
