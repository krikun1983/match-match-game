import { BaseComponent } from '../../../base-components';
import './score-container.scss';
import { resData } from '../../../../indexedDB/indexedDB';

export class ScoreContainer extends BaseComponent {
  public myList = resData;

  constructor() {
    super('div', ['score-container']);
    this.element.setAttribute('id', 'privet');
    this.element.innerHTML = this.displayNotes();
    this.myList = resData;
  }

  displayNotes = () => {
    let listHTML = '<ul class="score-persons-db">';
    for (let i = 0; i < this.myList.length; i++) {
      const note = this.myList[i];
      console.log(note);
      listHTML += `
      <li class="score-persons-db__item">
        Firstname: ${note.firstName} | Lastname: ${note.lastName} | Email: ${note.email} | Score:  ${note.score}
      </li>
      `;
    }
    return listHTML;
  };

  public render(): HTMLElement {
    return this.element;
  }
}
