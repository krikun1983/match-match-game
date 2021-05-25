import { BaseComponent } from "../../base-components";
import { ScoreContainer } from "./score-container/score-container";

export class ScorePage extends BaseComponent {
  private readonly container: ScoreContainer;

  constructor() {
    super('section', ['score']);
    this.container = new ScoreContainer();
    this.element.appendChild(this.container.element);
  }
  public render(): HTMLElement {
    return this.element;
  }
}