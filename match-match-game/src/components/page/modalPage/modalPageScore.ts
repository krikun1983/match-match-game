import { BaseComponent } from '../../base-components';
import './modalPageScore.scss';

export class ModalPageScore extends BaseComponent {
  constructor() {
    super('div', ['modal-page-score', 'hidden']);
    this.element.innerHTML = `
      <div class="modal-wrapper-score">
        <p class="score__text">Congratulations</p>
        <a href='#/score' class="score__button">ок</a>
      </div>
    `;
  }

  public render(): HTMLElement {
    return this.element;
  }
}
