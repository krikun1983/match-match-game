import { BaseComponent } from '../../base-components';
import { Game } from '../../game/game';
import { ImageCategoryModel } from '../../models/images-category-model';

export class GamePage extends BaseComponent {
  private readonly game: Game;

  constructor() {
    super('section', ['game-section']);
    this.game = new Game();
    this.element.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const DIFFICULT_GAME_SETTINGS: string | number | null =
      localStorage.getItem('difficulty-of-game');

    const SELECTED_GAME_SETTINGS: string | number | null =
      localStorage.getItem('select-game-cards');

    const res = await fetch('../images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[Number(SELECTED_GAME_SETTINGS)];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images, Number(DIFFICULT_GAME_SETTINGS!.slice(0, 1)));
  }

  public render(): HTMLElement {
    this.start();
    return this.element;
  }
}
