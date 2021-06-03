import { BaseComponent } from '../../base-components';
import './modalPage.scss';

export class ModalPage extends BaseComponent {
  private firstName = document.querySelector('#firstName');

  private lastName = document.querySelector('#lastName');

  private email = document.querySelector('#email');

  private isCheckNames = '[^0-9][^~!@#$%*()_—+=|:;<>,.?/^`" ]{1,30}';

  private isCheckEmail =
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]{2,20}\\.+[a-zA-Z0-9-.]{1,30}$';

  private isTitleNames =
    'Поле не может быть пустым, имя не может состоять из цифр, имя не может содержать служебные символы';

  private isTitleEmails =
    'email не может быть пустым, должен соответствовать стандартному правилу формированию email';

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
                    <input id="firstName" class="input-invalid" type="text" pattern='${this.isCheckNames}' title="${this.isTitleNames}" required>
                  </div>
                  <div class="modal-wrapper__inputs_check">
                    <input id="firstNameCheck" type="checkbox">
                  </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="lastName">Last Name</label>
                  <input id="lastName"class="input-invalid" type="text" pattern='${this.isCheckNames}' title="${this.isTitleEmails}" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input id="lastNameCheck" type="checkbox">
                </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="email">E-mail</label>
                  <input id="email" class="input-invalid" type="email" pattern='${this.isCheckEmail}' title="${this.isTitleNames}" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input id="emailCheck" type="checkbox">
                </div>
              </div>
            </div>
            <div class="modal-wrapper__avatars">
            </div>
          </div>
          <div class="modal-wrapper_btns">
            <button id='btn-add' class="btn-add invalid" type="submit" onclick="window.location.href = '#/score';">Add user</button>
            <button id='btn-close' type="button">cancel</button>
          </div>
        </form>
      </div>
    `;
  }

  get() {
    const score: string | null = localStorage.getItem('score');
    const IUserData = {
      firstName: (this.firstName as HTMLInputElement).value,
      lastName: (this.lastName as HTMLInputElement).value,
      email: (this.email as HTMLInputElement).value,
      score,
    };
    (this.firstName as HTMLInputElement).value = '';
    (this.lastName as HTMLInputElement).value = '';
    (this.email as HTMLInputElement).value = '';
    return IUserData;
  }

  open(): void {
    this.element.classList.remove('hidden');
  }

  close(): void {
    this.element.classList.add('hidden');
    // (this.firstName as HTMLInputElement).value = '';
    // (this.lastName as HTMLInputElement).value = '';
    // (this.email as HTMLInputElement).value = '';
  }

  public render(): HTMLElement {
    return this.element;
  }
}
