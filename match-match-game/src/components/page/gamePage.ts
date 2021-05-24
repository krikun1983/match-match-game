import { WithRender } from '../../app.api';

export class GamePage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'GamePage';

    console.log(this);

    return htmlElement;
  }
}
