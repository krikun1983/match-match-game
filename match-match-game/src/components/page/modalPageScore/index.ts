import BaseComponent from '../../base-components';
import ModalPage from '../modalPage';
import './modalPageScore.scss';

export default class ModalPageScore extends BaseComponent {
  private readonly modalPage: ModalPage;

  constructor() {
    super('div', ['modal-page-score', 'hidden']);
    this.modalPage = new ModalPage();
    this.element.innerHTML = `
      <div class="modal-wrapper-score">
        <p class="score__text">Congratulations</p>
        <button class="score__button">ок</button>
      </div>
    `;
  }

  static close(): void {
    const MODAL_SCORE_PAGE_BTN_OK = document.querySelector(
      '.score__button',
    ) as HTMLButtonElement;
    const MODAL_SCORE_PAGE_FIELD_AROUND = document.querySelector(
      '.modal-page-score',
    ) as HTMLDivElement;

    MODAL_SCORE_PAGE_BTN_OK.addEventListener('click', (): void => {
      MODAL_SCORE_PAGE_FIELD_AROUND.classList.add('hidden');
      ModalPage.open();
    });
  }

  public render(): HTMLElement {
    return this.element;
  }
}
