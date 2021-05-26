import { Header } from './components/header/header';
import { ModalPage } from './components/page/modalPage/modalPage';

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
    const BTNCLOSE: Element | null = document.querySelector('#btn-close');
    const scroll: number = window.innerWidth - document.documentElement.clientWidth;

    MODALBUTTON?.addEventListener('click', (): void => {
      MODALPAGE?.classList.remove('hidden');
      this.rootElement.style.overflow = 'hidden';
      this.rootElement.style.paddingRight = scroll + 'px';
    })
    BTNCLOSE?.addEventListener('click', (): void => {
      MODALPAGE?.classList.add('hidden');
      this.rootElement.style.overflow = '';
      this.rootElement.style.paddingRight = '0px';
    })
    MODALPAGE?.addEventListener('click', (event) => {
      if (event.target === MODALPAGE) {
        MODALPAGE?.classList.add('hidden');
        this.rootElement.style.overflow = '';
        this.rootElement.style.paddingRight = '0px';
      }
    })
  }
}


