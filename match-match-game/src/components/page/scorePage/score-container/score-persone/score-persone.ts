import './score-persone.scss';
import { BaseComponent } from '../../../../base-components';
import { Persone } from './persone/persone';
import { Score } from './score/score';

export class ScorePersone extends BaseComponent {
  private readonly persone: Persone;

  private readonly score: Score;

  constructor() {
    super('div', ['score-persons', 'hidden']);
    this.persone = new Persone();
    this.score = new Score();
    this.element.appendChild(this.persone.element);
    this.element.appendChild(this.score.element);
  }
}
