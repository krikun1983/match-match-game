import { BaseComponent } from '../../../base-components';
import './score-container.scss';
import { ScorePersone } from './score-persone/score-persone';

export class ScoreContainer extends BaseComponent {
  private readonly persons: ScorePersone;
  constructor() {
    super('div', ['container']);
    this.persons = new ScorePersone();
    this.element.innerHTML = `<h6>Best players</h6>`;
    this.element.appendChild(this.persons.element);
  }
  public render(): HTMLElement {
    return this.element;
  }
}
