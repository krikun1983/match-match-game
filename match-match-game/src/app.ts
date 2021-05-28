import { Header } from './components/header/header';
import { ModalPage } from './components/page/modalPage/modalPage';
import { DataBasa } from './indexedDB/indexedDB';

export class App {
  private readonly header: Header;

  private readonly modalPage: ModalPage;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.modalPage = new ModalPage();
    this.rootElement.appendChild(this.modalPage.element);
    this.rootElement.appendChild(this.header.element);
  }

  public modalWindow(): void {
    const MODALPAGE: Element | null = document.querySelector('.modal-page');
    const MODALBUTTON: Element | null = document.querySelector('.header-games__btn');
    const BTNADD: Element | null = document.querySelector('#btn-add');
    const BTNCLOSE: Element | null = document.querySelector('#btn-close');

    const myDb = new DataBasa();
    myDb.init('krikun1983');

    MODALBUTTON?.addEventListener('click', (): void => {
      this.modalPage.open();
    })
    BTNADD?.addEventListener('click', (event: Event): void => {
      event.preventDefault();
      myDb.write();
      this.modalPage.close();
    })
    BTNCLOSE?.addEventListener('click', (): void => {
      this.modalPage.close();
    })
    MODALPAGE?.addEventListener('click', (event): void => {
      if (event.target === MODALPAGE) {
        this.modalPage.close();
      }
    })
  }
}


