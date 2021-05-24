import { WithRender } from '../../app.api';

export class ScorePage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'ScorePage';

    console.log(this);

    return htmlElement;
  }
}
