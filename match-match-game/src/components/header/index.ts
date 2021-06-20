import BaseComponent from '../base-components';
import HeaderMatch from './header-match/header-match';
import HeaderContainer from './header-container/header-container';
import HeaderMenu from './header-menu/header-menu';
import HeaderNav from './header-nav/header-nav';
import HeaderGamerPersons from './header-games/header-games';
import './header.scss';

export default class Header extends BaseComponent {
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

  public static addClassActive(): void {
    const MENU = document.querySelector('.menu') as HTMLUListElement;
    const MENU_ITEMS = document.querySelectorAll('.menu__item > a');
    const MENU_ITEM_ABOUT = document.querySelector('#about') as HTMLLinkElement;
    const MENU_ITEM_SCORE = document.querySelector('#score') as HTMLLinkElement;
    const MENU_ITEM_SETTINGS = document.querySelector(
      '#settings',
    ) as HTMLLinkElement;
    const HEADER_BTN_GAME = document.querySelector(
      '.header-games__btn',
    ) as HTMLButtonElement;
    const MENU_ITEM_ACTIVE_CLASS = 'active';

    MENU.addEventListener('click', (event: Event): void => {
      MENU_ITEMS.forEach(item => {
        item.classList.remove(MENU_ITEM_ACTIVE_CLASS);
      });
      if (event.target instanceof Element) {
        event.target.classList.add(MENU_ITEM_ACTIVE_CLASS);
      }
    });

    const headerBtnGameAddStart = (): void => {
      HEADER_BTN_GAME.classList.add('state');
      HEADER_BTN_GAME.innerHTML = 'start game';
      HEADER_BTN_GAME.setAttribute('href', '#/about');
    };

    const headerBtnGameRemoveStart = (): void => {
      HEADER_BTN_GAME.classList.remove('state');
      HEADER_BTN_GAME.innerHTML = 'stop game';
      HEADER_BTN_GAME.setAttribute('href', '#/game');
    };

    const headerBtnGameStartStop = (): void => {
      if (HEADER_BTN_GAME.classList.contains('state')) {
        headerBtnGameRemoveStart();
      } else {
        headerBtnGameAddStart();
      }
    };

    MENU_ITEM_ABOUT.addEventListener('click', headerBtnGameAddStart);
    MENU_ITEM_SCORE.addEventListener('click', headerBtnGameAddStart);
    MENU_ITEM_SETTINGS.addEventListener('click', headerBtnGameAddStart);
    HEADER_BTN_GAME.addEventListener('click', headerBtnGameStartStop);
  }
}
