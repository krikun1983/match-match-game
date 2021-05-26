import { BaseComponent } from '../../base-components';
import './modalPage.scss';

export class ModalPage extends BaseComponent {
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
                    <input id="firstName" type="text" required>
                  </div>
                  <div class="modal-wrapper__inputs_check">
                    <input type="checkbox">
                  </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="lastName">Last Name</label>
                  <input id="lastName" type="text" required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input type="checkbox">
                </div>
              </div>
              <div class="modal-wrapper__inputs_wrap">
                <div class="modal-wrapper__inputs_field">
                  <label for="email">E-mail</label>
                  <input id="email" type="email" pattern='^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$' required>
                </div>
                <div class="modal-wrapper__inputs_check">
                  <input type="checkbox">
                </div>
              </div>
            </div>
            <div class="modal-wrapper__avatars">
            </div>
          </div>
          <div class="modal-wrapper_btns">
            <button type="submit">Add user</button>
            <button id='btn-close' type="button">cancel</button>
          </div>
        </form>
      </div>
    `;
  }
  public render(): HTMLElement {
    return this.element;
  }

  // public open(): void {
  //   this.element.classList.remove('hidden');
  // }
  // public close(): void {
  //   this.element.classList.add('hidden');
  // }
}
