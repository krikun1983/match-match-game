import './form-settings-difficult.scss';
import { BaseComponent } from '../../../../base-components';
import { SelectDiffculty } from './select-difficulty/select-diffculty';

export class FormSettingsDifficulty extends BaseComponent {
  private readonly selectDiffculty: SelectDiffculty;

  constructor() {
    super('div', ['form-settings-difficulty']);
    this.element.innerHTML = `
      <label class="form-settings__label" for="game-cards">Difficulty</label>
    `;
    this.selectDiffculty = new SelectDiffculty();
    this.element.appendChild(this.selectDiffculty.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
