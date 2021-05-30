import { BaseComponent } from '../../../../../base-components';
import './select-diffculty.scss';

export class SelectDiffculty extends BaseComponent {
  public index = 4;

  constructor() {
    super('select', ['select-diffculty']);
    this.element.innerHTML = `
      <option value="4" selected>select game type</option>
      <option value="3">3x3</option>
      <option value="4">4x4</option>
      <option value="6">6x6</option>
    `;
    this.element.addEventListener('change', (): void => {
      this.index = +(this.element as HTMLSelectElement).value;
      console.log(this.index);
      localStorage.setItem('select-diffculty', this.index.toString());
    });
  }
}
