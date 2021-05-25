import { BaseComponent } from '../../../../../base-components';
import './persone.scss';

export class Persone extends BaseComponent {
  constructor() {
    super('div', ['persone']);
    this.element.innerHTML = `
      <div class='persone__wrapper'>
        <div class='persone__avatar'></div>
        <div class='persone__data'>
          <div class='persone__data_name'>Nicci Troiani</div>
          <div class='persone__data_email'>nicci@gmail.com</div>
        </div>
      </div>
    `;
  }
}
