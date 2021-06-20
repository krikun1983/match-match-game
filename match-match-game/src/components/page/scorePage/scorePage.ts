import BaseComponent from '../../base-components';
import ScoreContainer from './score-container/score-container';

export default class ScorePage extends BaseComponent {
  private readonly container: ScoreContainer;

  constructor() {
    super('section', ['score']);
    this.container = new ScoreContainer();
    this.element.appendChild(this.container.render());
  }

  public render(): HTMLElement {
    return this.element;
  }
}
