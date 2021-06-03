import { BaseComponent } from '../../../../base-components';
import './timer.scss';

export class TimerField extends BaseComponent {
  public seconds = -4;

  public minutes = 0;

  public displaySeconds = '0';

  public displayMinutes = '0';

  public displaySecondsMinus = '-4';

  public interval = 0;

  public status = 'started';

  public statusBTN = 'Stop';

  constructor() {
    super('div', ['timer-field']);
  }

  public startTimer() {
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
          <span class='timer-item timer-minutes'>${this.displayMinutes}</span>:
          <span class='timer-item timer-seconds'>${this.displaySeconds}</span>
    `;
    } else {
      this.element.innerHTML = `
          <span class='timer-item timer-seconds'>${this.displaySecondsMinus}</span>
    `;
    }
    const resultTimes = +this.displayMinutes * 60 + +this.displaySeconds;
    return resultTimes;
  }

  startStop() {
    const timerBtn = document.querySelector('.timer-btn');
    if (this.status === 'started') {
      this.interval = window.setInterval(() => this.startTimer(), 1000);
    } else {
      window.clearInterval(this.interval);
    }
    timerBtn?.addEventListener('click', () => {
      if (this.status === 'started') {
        window.clearInterval(this.interval);
        timerBtn.textContent = 'Start';
        this.status = 'stopped';
      } else {
        this.interval = window.setInterval(() => this.startTimer(), 1000);
        timerBtn.textContent = 'Stop';
        this.status = 'started';
      }
    });
  }

  stop() {
    window.clearInterval(this.interval);
  }
}
