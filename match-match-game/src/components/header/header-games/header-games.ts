import { BaseComponent } from '../../base-components';
import './header-games.scss';
// import img from '../../assets/images/avatar.png';

export class HeaderGames extends BaseComponent {
  constructor() {
    super('div', ['header-games']);
    this.element.appendChild(this.renderButton());
    // this.element.appendChild(this.renderAvatar());
  }
  private renderButton() {
    const button = new BaseComponent('button', ['header-games__btn']);
    button.element.innerHTML = 'register new player';
    return button.element;
  }
  private renderAvatar() {
    const avatar = new BaseComponent('div', ['header-games__avatar']);
    avatar.element.innerHTML = `<img src="./avatar.png"/>`;
    return avatar.element;
  }
}
