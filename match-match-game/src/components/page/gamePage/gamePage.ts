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
    const res = await fetch('../images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }

  public render(): HTMLElement {
    this.start();
    return this.element;
  }
}
