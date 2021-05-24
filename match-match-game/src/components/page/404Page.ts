import { WithRender } from '../../app.api';

export class NotFound404Page implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'NOT FOUND 404';

    console.log(this);

    return htmlElement;
  }
}
