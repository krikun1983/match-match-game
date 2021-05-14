import { BaseComponent } from '../base-components';
import './persons.scss';
// import img from '../../assets/images/avatar.png';

export class Persons extends BaseComponent {
  constructor() {
    super('div', ['persons']);
    this.element.innerHTML = `
      <button class="persons__btn-start">Start game</button>
      <div class="persons__avatar"><img src="./avatar.png"/></div>
    `;
  }
}
