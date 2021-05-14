import { Main } from './components/main/main';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/models/images-category-model';
import { Header } from './components/header/header';
import { Match } from './components/match/match';
import { Container } from './components/container/container';
import { HeaderNav } from './components/header-nav/header-nav';
import { Persons } from './components/persons/persons';

export class App {
  private readonly header: Header;

  private readonly container: Container;

  private readonly match: Match;

  private readonly headerNav: HeaderNav;

  private readonly persons: Persons;

  private readonly main: Main;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.container = new Container();
    this.match = new Match();
    this.headerNav = new HeaderNav();
    this.persons = new Persons();
    this.main = new Main();
    this.game = new Game();
    this.rootElement.appendChild(this.header.element);
    this.header.element.appendChild(this.container.element);
    this.container.element.appendChild(this.match.element);
    this.container.element.appendChild(this.headerNav.element);
    this.container.element.appendChild(this.persons.element);
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
