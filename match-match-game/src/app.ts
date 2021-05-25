import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/models/images-category-model';
import { Header } from './components/header/header';

export class App {
  private readonly header: Header;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
  }
}
