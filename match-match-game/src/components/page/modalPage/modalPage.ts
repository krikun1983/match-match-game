import { BaseComponent } from '../../base-components';
import './modalPage.scss';

export class ModalPage extends BaseComponent {
  private firstName = document.querySelector('#firstName');

  private lastName = document.querySelector('#lastName');

  private email = document.querySelector('#email');

  private isCheckNames = '[^0-9][^~!@#$%*()_—+=|:;<>,.?/^`"]{1,30}';

  private isCheckEmail = '^([a-zA-Z0-9_-]+.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-z0-9_-]+)+.[a-z]{2,6}$';

  private isTitleNames = 'Нельзя использовать специальные символы и цифры';

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
                  <input id="lastName"class="input-invalid" type="text" pattern='${this.isCheckNames}' title="${this.isTitleNames}" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input id="lastNameCheck" type="checkbox">
                </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="email">E-mail</label>
                  <input id="email" class="input-invalid" type="email" pattern='${this.isCheckEmail}' required>
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
            <button id='btn-add' class="btn-add invalid" type="submit">Add user</button>
            <button id='btn-close' type="button">cancel</button>
          </div>
        </form>
      </div>
    `;
  }

  get() {
    // const isCheck = /[-()~!@#$%*_—+=|:;"'`<>,.?/^]/.test((firstName as HTMLInputElement).value)
    // console.log(isCheck);
    const IUserData = {
      firstName: (this.firstName as HTMLInputElement).value,
      lastName: (this.lastName as HTMLInputElement).value,
      email: (this.email as HTMLInputElement).value,
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
  }

  public render(): HTMLElement {
    return this.element;
  }
}
