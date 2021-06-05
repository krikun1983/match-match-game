import { Header } from './components/header/header';
import { ModalPage } from './components/page/modalPage/modalPage';
import { ModalPageScore } from './components/page/modalPage/modalPageScore';
import { DataBasa } from './indexedDB/indexedDB';

export class App {
  private readonly header: Header;

  private readonly modalPageScore: ModalPageScore;

  private readonly modalPage: ModalPage;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.modalPage = new ModalPage();
    this.modalPageScore = new ModalPageScore();
    this.rootElement.appendChild(this.modalPage.element);
    this.rootElement.appendChild(this.modalPageScore.element);
    this.rootElement.appendChild(this.header.element);
    Header.addClassActive();
  }

  public modalWindow(): void {
    const myDb = new DataBasa();
    myDb.init('krikun1983');
    localStorage.setItem('select-diffculty', '4');

    this.modalPage.getAvatar();
    this.modalPage.close();
    this.modalPage.validats();
    this.modalPageScore.close();

    const MODAL_REG_PAGE_BTN_ADD: Element | null = document.querySelector('#btn-add');
    const HEADER_BTN_GAME_START: Element | null = document.querySelector(
      '.header-games__btn__start',
    );
    const HEADER_BTN_GAME_STOP: Element | null = document.querySelector(
      '.header-games__btn__stop',
    );

    MODAL_REG_PAGE_BTN_ADD?.addEventListener('click', (event: Event): void => {
      if (MODAL_REG_PAGE_BTN_ADD?.classList.contains('invalid')) return;
      event.preventDefault();
      myDb.write();
      this.modalPage.close();
      HEADER_BTN_GAME_START?.classList.remove('hidden');
      HEADER_BTN_GAME_STOP?.classList.add('hidden');
    });
  }
}
