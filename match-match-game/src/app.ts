import { Main } from './components/main/main';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/models/images-category-model';
import { Header } from './components/header/header';
import { Router } from './router/router';
import { routes } from './router/routes';

export class App {
  private readonly header: Header;

  // private readonly main: Main;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    // this.main = new Main(new Router(routes));
    this.game = new Game();
    this.rootElement.appendChild(this.header.element);
    // this.rootElement.appendChild(this.main.render());
    // this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }

}
