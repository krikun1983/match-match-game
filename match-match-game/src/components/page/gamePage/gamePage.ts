import { BaseComponent } from '../../base-components';
import { Game } from '../../game/game';
import { ImageCategoryModel } from '../../models/images-category-model';

export class GamePage extends BaseComponent {
  private readonly game: Game;

  constructor() {
    super('section', ['game']);
    this.game = new Game();
    this.element.appendChild(this.game.element);
  }

  async start() {
    localStorage.setItem('select-diffculty', '3');
    const DIFFICULT_CAME_SETTINGS: string | number | null = localStorage.getItem('select-diffculty');
    const SELECTED_CAME_SETTINGS: string | number | null = localStorage.getItem('select-game-cards');
    const res = await fetch('../images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[Number(SELECTED_CAME_SETTINGS)];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images, Number(DIFFICULT_CAME_SETTINGS));
  }

  public render(): HTMLElement {
    this.start();
    return this.element;
  }
}
