import { BaseComponent } from '../../../base-components';
import { FormSettingsDifficulty } from './difficulty/form-settings-difficult';
import { FormSettingsGameCards } from './game-cards/form-settings-game-cards';
import './settings-form.scss';

export class SettingsForm extends BaseComponent {
  private readonly formSettingsGameCards: FormSettingsGameCards;

  private readonly formSettingsDifficulty: FormSettingsDifficulty;

  constructor() {
    super('form', ['settings-form']);
    this.formSettingsGameCards = new FormSettingsGameCards();
    this.formSettingsDifficulty = new FormSettingsDifficulty();
    this.element.appendChild(this.formSettingsGameCards.element);
    this.element.appendChild(this.formSettingsDifficulty.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
