import { BaseComponent } from '../../../../../base-components';
import './score.scss';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['scores']);
    this.element.innerHTML = `
      Score:&nbsp;<span>123</span>
    `;
  }
}
