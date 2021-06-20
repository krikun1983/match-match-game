import { MyRecord } from '../../../app.types';
import BaseComponent from '../../base-components';
import './modalPage.scss';

export default class ModalPage extends BaseComponent {
  private firstName = document.querySelector('#firstName');

  private lastName = document.querySelector('#lastName');

  private email = document.querySelector('#email');

  private imagesLoad = document.querySelector('.bg-image-avatars');

  private isCheckNames = '[^0-9][^~!@#$%*()_—+=|:;<>,.?/^`" ]{1,30}';

  private isCheckEmail = `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]{2,20}\\.+[a-zA-Z0-9-.]{1,30}$`;

  private isTitleNames = `Поле не может быть пустым,
    имя не может состоять из цифр,
    имя не может содержать служебные символы`;

  private isTitleEmails = `email не может быть пустым,
    должен соответствовать стандартному правилу формированию email`;

  constructor() {
    super('div', ['modal-page', 'hidden']);
    this.element.innerHTML = `
      <div class="modal-wrapper">
        <div class="modal-wrapper__header">Register new Player</div>
        <form>
          <div class="modal-wrapper_wrap">
              <div class="modal-wrapper__inputs">
                <div class="modal-wrapper__inputs_wrap">
                  <div class="modal-wrapper__inputs_field">
                    <label for="firstName">First Name</label>
                    <input id="firstName"
                      class="modal-input input-invalid"
                      type="text" pattern='${this.isCheckNames}' title="${this.isTitleNames}" required>
                  </div>
                  <div class="modal-wrapper__inputs_check">
                    <input id="firstNameCheck" type="checkbox">
                  </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="lastName">Last Name</label>
                  <input id="lastName"
                    class="modal-input input-invalid"
                    type="text" pattern='${this.isCheckNames}' title="${this.isTitleEmails}" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input id="lastNameCheck" type="checkbox">
                </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="email">E-mail</label>
                  <input id="email"
                    class="modal-input input-invalid"
                    type="email" pattern='${this.isCheckEmail}' title="${this.isTitleNames}" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input id="emailCheck" type="checkbox">
                </div>
              </div>
            </div>
            <div class="modal-wrapper__avatars">
              <img class="bg-image-avatars" src='./images/avatar_fon.svg'>
              <input class="btn-load--input" id="btnInput" name="upload" type="file">
            </div>
          </div>
          <div class="modal-wrapper_btns">
            <button id='btn-add' class="btn-modal btn-add invalid"
            type="submit" onclick="window.location.href = '#/score';">
              Add user
            </button>
            <button id='btn-close' class="btn-modal" type="button">cancel</button>
          </div>
        </form>
      </div>
    `;
  }

  get(): MyRecord {
    const score: string | null = localStorage.getItem('score');
    const IUserData = {
      firstName: (this.firstName as HTMLInputElement).value,
      lastName: (this.lastName as HTMLInputElement).value,
      email: (this.email as HTMLInputElement).value,
      imagesLoad: (this.imagesLoad as HTMLImageElement).src,
      score,
    };
    (this.firstName as HTMLInputElement).value = '';
    (this.lastName as HTMLInputElement).value = '';
    (this.email as HTMLInputElement).value = '';
    return IUserData;
  }

  static getAvatar(): void {
    const btnUploadFile = <HTMLFormElement>document.querySelector('#btnInput');
    const avatarImage = <HTMLFormElement>(
      document.querySelector('.bg-image-avatars')
    );

    btnUploadFile.addEventListener('change', () => {
      const file = URL.createObjectURL(btnUploadFile.files[0]);
      avatarImage.src = file;
      const canvas = document.createElement('canvas');
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = avatarImage.src;
      img.addEventListener('load', () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.toDataURL('image/png');
        avatarImage.src = link.href;
      });
    });
  }

  static open(): void {
    const MODAL_REG_PAGE_FIELD_AROUND: Element | null =
      document.querySelector('.modal-page');
    MODAL_REG_PAGE_FIELD_AROUND?.classList.remove('hidden');
  }

  close(): void {
    this.element.classList.add('hidden');
    const MODAL_REG_PAGE_FIELD_AROUND: Element | null =
      document.querySelector('.modal-page');
    const MODAL_REG_PAGE_BTN_CLOSE: Element | null =
      document.querySelector('#btn-close');
    MODAL_REG_PAGE_FIELD_AROUND?.addEventListener('click', (event): void => {
      if (event.target === MODAL_REG_PAGE_FIELD_AROUND) {
        this.element.classList.add('hidden');
      }
    });
    MODAL_REG_PAGE_BTN_CLOSE?.addEventListener('click', (): void => {
      this.element.classList.add('hidden');
    });
  }

  static validation(): void {
    const firstName = document.querySelector('#firstName') as HTMLInputElement;
    const lastName = document.querySelector('#lastName') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const firstNameCheck = document.querySelector(
      '#firstNameCheck',
    ) as HTMLInputElement;
    const lastNameCheck = document.querySelector(
      '#lastNameCheck',
    ) as HTMLInputElement;
    const emailCheck = document.querySelector(
      '#emailCheck',
    ) as HTMLInputElement;
    const MODAL_REG_PAGE_BTN_ADD = document.querySelector(
      '#btn-add',
    ) as HTMLButtonElement;
    const validate = () => {
      if (
        firstName.validity.valid &&
        lastName.validity.valid &&
        email.validity.valid
      ) {
        MODAL_REG_PAGE_BTN_ADD.classList.remove('invalid');
      } else {
        MODAL_REG_PAGE_BTN_ADD.classList.add('invalid');
      }
    };
    const validateField = () => {
      if (firstName.validity.valid) {
        firstName.classList.remove('input-invalid');
        firstNameCheck.setAttribute('checked', '');
      } else {
        firstName.classList.add('input-invalid');
        firstNameCheck.removeAttribute('checked');
      }

      if (lastName.validity.valid) {
        lastName.classList.remove('input-invalid');
        lastNameCheck.setAttribute('checked', '');
      } else {
        lastName.classList.add('input-invalid');
        lastNameCheck.removeAttribute('checked');
      }

      if (email.validity.valid) {
        email.classList.remove('input-invalid');
        emailCheck.setAttribute('checked', '');
      } else {
        email.classList.add('input-invalid');
        emailCheck.removeAttribute('checked');
      }
    };

    const validationAll = () => {
      validateField();
      validate();
    };

    firstName.addEventListener('input', validationAll);
    lastName.addEventListener('input', validationAll);
    email.addEventListener('input', validationAll);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
