import { BaseComponent } from '../../../base-components';
import './timer.scss';

export class Timer extends BaseComponent {
  public seconds = -30;

  public minutes = 0;

  public displaySeconds = '0';

  public displayMinutes = '0';

  public displaySecondsMinus = '-30';

  public interval = 0;

  constructor() {
    super('div', ['timer-wrapper']);
  }

  private startTimer(): HTMLElement {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.seconds = 0;
        this.minutes = 0;
      }
    }
    if (this.seconds < 0) {
      this.displaySecondsMinus = this.seconds.toString();
    }
    if (this.seconds >= 0 && this.seconds < 10) {
      this.displaySeconds = `0${this.seconds.toString()}`;
    } else {
      this.displaySeconds = this.seconds.toString();
    }

    if (this.minutes < 10) {
      this.displayMinutes = `0${this.minutes.toString()}`;
    } else {
      this.displayMinutes = this.minutes.toString();
    }

    if (this.seconds >= 0) {
      this.element.innerHTML = `
      <div class='timer'>
        <span class='timer-item timer-minutes'>${this.displayMinutes}</span>:
        <span class='timer-item timer-seconds'>${this.displaySeconds}</span>
      </div>
    `;
    } else {
      this.element.innerHTML = `
      <div class='timer'>
        <span class='timer-item timer-seconds'>${this.displaySecondsMinus}</span>
      </div>
    `;
    }

    return this.element;
  }

  start() {
    this.interval = window.setInterval(() => this.startTimer(), 1000);
  }
}
