import { BaseComponent } from '../../base-components';
import './settings-page.scss';
import { SettingsForm } from './settingsForm/settings-form';

export class SettingsPage extends BaseComponent {
  private readonly settingsForm: SettingsForm;

  constructor() {
    super('section', ['settings']);
    this.settingsForm = new SettingsForm();
    this.element.appendChild(this.settingsForm.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
