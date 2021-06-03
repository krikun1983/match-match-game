import { BaseComponent } from '../../../../base-components';
import './timer-btn.scss';

export class TimerButton extends BaseComponent {
  constructor() {
    super('div', ['timer-btn']);
    this.element.textContent = 'Stop';
  }

  render() {
    return this.element;
  }
}
