import { BaseComponent } from '../base-components';
import { HeaderMatch } from './header-match/header-match';
import { HeaderContainer } from './header-container/header-container';
import { HeaderMenu } from './header-menu/header-menu';
import { HeaderNav } from './header-nav/header-nav';
import { HeaderGamerPersons } from './header-games/header-games';
import './header.scss';

export class Header extends BaseComponent {
  private readonly headerContainer: HeaderContainer;

  private readonly match: HeaderMatch;

  private readonly headerNav: HeaderNav;

  private readonly headerMenu: HeaderMenu;

  private readonly headerGames: HeaderGamerPersons;

  constructor() {
    super('header', ['header']);
    this.headerContainer = new HeaderContainer();
    this.match = new HeaderMatch();
    this.headerNav = new HeaderNav();
    this.headerMenu = new HeaderMenu();
    this.headerGames = new HeaderGamerPersons();
    this.element.appendChild(this.headerContainer.element);
    this.headerContainer.element.appendChild(this.match.element);
    this.headerContainer.element.appendChild(this.headerNav.element);
    this.headerContainer.element.appendChild(this.headerGames.element);
    this.headerNav.element.appendChild(this.headerMenu.element);
  }
}
