import BaseComponent from '../../../../base-components';
import SelectDifficulty from './select-difficulty/select-difficulty';

export default class FormSettingsDifficulty extends BaseComponent {
  private readonly selectDiffculty: SelectDifficulty;

  constructor() {
    super('div', ['form-settings-difficulty']);
    this.element.innerHTML =
      '<label class="form-settings__label" for="game-cards">Difficulty</label>';
    this.selectDiffculty = new SelectDifficulty();
    this.element.appendChild(this.selectDiffculty.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
