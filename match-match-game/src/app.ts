import Header from './components/header';
import ModalPage from './components/page/modalPage';
import ModalPageScore from './components/page/modalPageScore';
import SettingsGame from './constants/card-images-game';
import Difficulty from './constants/difficulty-game';
import DataBase from './indexedDB';

export default class App {
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
    const myDb = new DataBase();
    myDb.init('krikun1983');

    localStorage.setItem(SettingsGame.difficulty, Difficulty.average);
    ModalPage.getAvatar();
    this.modalPage.close();
    ModalPage.validation();
    ModalPageScore.close();

    const MODAL_REG_PAGE_BTN_ADD = document.querySelector(
      '#btn-add',
    ) as HTMLButtonElement;
    const HEADER_BTN_GAME = document.querySelector(
      '.header-games__btn',
    ) as HTMLButtonElement;
    const MENU_ITEMS = document.querySelectorAll('.menu__item > a');
    const MENU_ITEMS_SCORE = document.querySelector(
      '#score',
    ) as HTMLLinkElement;
    MODAL_REG_PAGE_BTN_ADD.addEventListener('click', (event: Event): void => {
      if (MODAL_REG_PAGE_BTN_ADD?.classList.contains('invalid')) return;
      event.preventDefault();
      myDb.write();
      this.modalPage.close();
      HEADER_BTN_GAME.classList.add('state');
      HEADER_BTN_GAME.innerHTML = 'start game';
      HEADER_BTN_GAME.setAttribute('href', '#/game');
      MENU_ITEMS.forEach(item => {
        item.classList.remove('active');
      });
      MENU_ITEMS_SCORE.classList.add('active');
    });
  }
}
