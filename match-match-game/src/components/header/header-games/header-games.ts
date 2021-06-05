import { BaseComponent } from '../../base-components';
import './header-games.scss';
// import img from '../../assets/images/avatar.png';

export class HeaderGamerPersons extends BaseComponent {
  constructor() {
    super('div', ['header-games']);
    // this.element.appendChild(HeaderGamerPersons.renderButtonReg());
    this.element.appendChild(HeaderGamerPersons.renderButtonStart());
    this.element.appendChild(HeaderGamerPersons.renderButtonStop());
    // this.element.appendChild(this.renderAvatar());
  }

  private static renderButtonReg() {
    const button = new BaseComponent('button', ['header-games__btn__reg']);
    button.element.innerHTML = 'register new player';
    return button.element;
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

  private renderAvatar() {
    const avatar = new BaseComponent('div', ['header-games__avatar']);
    avatar.element.innerHTML = '<img src="./avatar.png"/>';
    console.log(this);
    return avatar.element;
  }
}
