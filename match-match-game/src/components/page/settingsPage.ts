import { WithRender } from '../../app.api';

export class SettingsPage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'SettingsPage';

    return htmlElement;
  }
}
