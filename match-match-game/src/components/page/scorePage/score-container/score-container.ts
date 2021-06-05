import { BaseComponent } from '../../../base-components';
import './score-container.scss';
import { resData } from '../../../../indexedDB/indexedDB';

export class ScoreContainer extends BaseComponent {
  public myList = resData;

  constructor() {
    super('div', ['score-container']);
    this.element.setAttribute('id', 'privet');
    this.myList = resData;
    this.element.innerHTML = this.displayNotes();
  }

  public displayNotes(): string {
    let listHTML = '<ul class="score-persons-db">';
    for (let i = 0; i < this.myList.length && i < 10; i++) {
      const note = this.myList[i];
      listHTML += `
      <li class="score-persons-db__item">
      <img class="score-persons-avatar" src='${note.imagesLoad}'>
        Firstname: ${note.firstName} | Lastname: ${note.lastName} | Email: ${note.email} | Score:  ${note.score}
      </li>
      `;
    }
    return listHTML;
  }

  public render(): HTMLElement {
    return this.element;
  }
}
