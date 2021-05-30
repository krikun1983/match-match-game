import { BaseComponent } from '../../../base-components';
import './about-container.scss';

export class AboutContainer extends BaseComponent {
  constructor() {
    super('div', ['container']);
    this.element.innerHTML = `
    <h6>How to play?</h6>
    <div class='wrapper'>
      <div class='questions'>
        <div><span>1</span>Register new player in game</div>
        <div><span>2</span>Configure your game settings</div>
        <div><span>3</span>Start you new game! Remember card<br>positions and match it before times up.</div>
      </div>
      <div class='images'>
        <div class='images__popup'></div>
        <div class='images__settings'></div>
        <div class='images__field'></div>
      </div>
    </div>
    `;
  }

  public render(): HTMLElement {
    return this.element;
  }
}
