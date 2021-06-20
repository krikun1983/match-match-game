import SettingsGame from '../../../constants/card-images-game';
import BaseComponent from '../../base-components';
import Game from '../../game/game';
import { ImageCategoryModel } from '../../models/images-category-model';

export default class GamePage extends BaseComponent {
  private readonly game: Game;

  constructor() {
    super('section', ['game-section']);
    this.game = new Game();
    this.element.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const SELECT_DIFFICULT_GAME_SETTINGS: string | null = localStorage.getItem(
      SettingsGame.difficulty,
    );
    const SELECT_IMAGE_FOR_GAME_CARDS_SETTINGS: string | null =
      localStorage.getItem(SettingsGame.cardImages);
    const res = await fetch('../images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[Number(SELECT_IMAGE_FOR_GAME_CARDS_SETTINGS)];
    const images = cat.images.map(name => `${cat.category}/${name}`);

    this.game.newGame(
      images,
      Number(SELECT_DIFFICULT_GAME_SETTINGS?.slice(0, 1)),
    );
  }

  public render(): HTMLElement {
    this.start();
    return this.element;
  }
}
