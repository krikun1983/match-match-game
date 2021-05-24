import { WithRender } from '../../app.api';

export class AboutPage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'AboutPage';

    console.log(this);

    return htmlElement;
  }
}
