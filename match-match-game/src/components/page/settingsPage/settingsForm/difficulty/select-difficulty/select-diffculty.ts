import { BaseComponent } from '../../../../../base-components';
import './select-diffculty.scss';

export class SelectDiffculty extends BaseComponent {
  private index = 0;

  constructor() {
    super('select', ['select-diffculty']);
    this.element.innerHTML = `
      <option selected>select game type</option>
      <option value="1">4x4</option>
      <option value="2">6x6</option>
    `;

    // this.element.addEventListener('change', (): void => {
    //   this.index = (<HTMLSelectElement>this.element).selectedIndex;
    // });
  }
}
