import { BaseComponent } from '../../../base-components';
import { resData } from '../../../../indexedDB/indexedDB';
import './score-container.scss';

export class ScoreContainer extends BaseComponent {
  public myList = resData;

  constructor() {
    super('div', ['score-container']);
    this.element.setAttribute('id', 'privet');
    this.myList = resData;
    this.element.innerHTML = this.displayNotes();
  }

  public displayNotes(): string {
    let listHTML = '<div class="score-persons">';
    for (let i = 0; i < this.myList.length && i < 10; i++) {
      const note = this.myList[i];
      listHTML += `
        <div class="person">
          <div class="person__wrapper">
            <div class="person__avatar"><img class="person__avatar__images" src="${note.imagesLoad}"></div>
            <div class="person__data">
              <div class="person__data_name">${note.firstName} ${note.lastName}</div>
              <div class="person__data_email">${note.email}</div>
            </div>
          </div>
          <div class="scores">
            Score:&nbsp;<span>${note.score}</span>
          </div>
        </div>
      `;
    }
    return listHTML;
  }

  public render(): HTMLElement {
    return this.element;
  }
}
