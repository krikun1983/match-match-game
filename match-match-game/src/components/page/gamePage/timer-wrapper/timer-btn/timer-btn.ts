import BaseComponent from '../../../../base-components';
import './timer-btn.scss';

export default class TimerButton extends BaseComponent {
  constructor() {
    super('div', ['timer-btn']);
    this.element.textContent = 'Stop';
  }

  render(): HTMLElement {
    return this.element;
  }
}
