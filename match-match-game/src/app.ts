import { Main } from './components/main/main';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/models/images-category-model';

export class App {
  private readonly main: Main;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.main = new Main();
    this.game = new Game();
    this.rootElement.appendChild(this.main.element);
    this.main.element.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
