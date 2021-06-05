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
    this.modalPage.getAvatar();
    localStorage.setItem('select-diffculty', '4');
    const MODALPAGE: Element | null = document.querySelector('.modal-page');
    const BTNMODAL: Element | null = document.querySelector(
      '.header-games__btn__reg',
    );
    const MODALSCOREOPEN: Element | null =
      document.querySelector('.modal-page-score');
    const BTNMODALSCORECLOSE: Element | null =
      document.querySelector('.score__button');
    const BTNADD: Element | null = document.querySelector('#btn-add');
    const BTNADDLINK: Element | null = document.querySelector('.btn-add-link');
    const BTNCLOSE: Element | null = document.querySelector('#btn-close');
    const BTNSTARTGAME: Element | null = document.querySelector(
      '.header-games__btn__start',
    );
    const BTNSTARTSTOP: Element | null = document.querySelector(
      '.header-games__btn__stop',
    );
    const firstName: HTMLInputElement | null =
      document.querySelector('#firstName');

    const lastName: HTMLInputElement | null =
      document.querySelector('#lastName');

    const email: HTMLInputElement | null = document.querySelector('#email');

    const firstNameCheck: HTMLInputElement | null =
      document.querySelector('#firstNameCheck');

    const lastNameCheck: HTMLInputElement | null =
      document.querySelector('#lastNameCheck');

    const emailCheck: HTMLInputElement | null =
      document.querySelector('#emailCheck');

    const about: Element | null = document.querySelector('#about');
    const score: Element | null = document.querySelector('#score');
    const settings: Element | null = document.querySelector('#settings');

    const validate = () => {
      if (
        firstName?.validity.valid &&
        lastName?.validity.valid &&
        email?.validity.valid
      ) {
        BTNADD?.classList.remove('invalid');
      } else {
        BTNADD?.classList.add('invalid');
      }
    };
    const validateField = () => {
      if (firstName?.validity.valid) {
        firstName.classList.remove('input-invalid');
        firstNameCheck?.setAttribute('checked', '');
      } else {
        firstName?.classList.add('input-invalid');
        firstNameCheck?.removeAttribute('checked');
      }

      if (lastName?.validity.valid) {
        lastName.classList.remove('input-invalid');
        lastNameCheck?.setAttribute('checked', '');
      } else {
        lastName?.classList.add('input-invalid');
        lastNameCheck?.removeAttribute('checked');
      }

      if (email?.validity.valid) {
        email.classList.remove('input-invalid');
        emailCheck?.setAttribute('checked', '');
      } else {
        email?.classList.add('input-invalid');
        emailCheck?.removeAttribute('checked');
      }
    };
    // validateField();
    firstName?.addEventListener('input', () => {
      validateField();
      validate();
    });
    lastName?.addEventListener('input', () => {
      validateField();
      validate();
    });
    email?.addEventListener('input', () => {
      validateField();
      validate();
    });

    const myDb = new DataBasa();
    myDb.init('krikun1983');
    BTNMODALSCORECLOSE?.addEventListener('click', (): void => {
      MODALSCOREOPEN?.classList.add('hidden');
      this.modalPage.open();
    });
    BTNADD?.addEventListener('click', (event: Event): void => {
      if (BTNADD?.classList.contains('invalid')) return;
      event.preventDefault();
      myDb.write();
      this.modalPage.close();
      BTNMODAL?.classList.add('hidden');
      BTNSTARTGAME?.classList.remove('hidden');
      BTNSTARTSTOP?.classList.add('hidden');
    });
    BTNCLOSE?.addEventListener('click', (): void => {
      this.modalPage.close();
    });
    MODALPAGE?.addEventListener('click', (event): void => {
      if (event.target === MODALPAGE) {
        this.modalPage.close();
      }
    });
    BTNSTARTGAME?.addEventListener('click', (): void => {
      BTNSTARTGAME?.classList.add('hidden');
      BTNSTARTSTOP?.classList.remove('hidden');
    });
    BTNSTARTSTOP?.addEventListener('click', (): void => {
      BTNSTARTSTOP?.classList.add('hidden');
      BTNSTARTGAME?.classList.remove('hidden');
    });

    about?.addEventListener('click', (): void => {
      BTNSTARTSTOP?.classList.add('hidden');
      BTNSTARTGAME?.classList.remove('hidden');
    });
    score?.addEventListener('click', (): void => {
      BTNSTARTSTOP?.classList.add('hidden');
      BTNSTARTGAME?.classList.remove('hidden');
    });
    settings?.addEventListener('click', (): void => {
      BTNSTARTSTOP?.classList.add('hidden');
      BTNSTARTGAME?.classList.remove('hidden');
    });
  }
}
