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

  public static addClassActive(): void {
    const MENU = document.querySelector('.menu');
    const MENU_ITEMS = document.querySelectorAll('.menu__item > a');
    const MENU_ITEMS_ABOUT: Element | null = document.querySelector('#about');
    const MENU_ITEMS_SCORE: Element | null = document.querySelector('#score');
    const MENU_ITEMS_SETTINGS: Element | null = document.querySelector('#settings');
    const HEADER_BTN_GAME_START: Element | null = document.querySelector(
      '.header-games__btn__start',
    );
    const HEADER_BTN_GAME_STOP: Element | null = document.querySelector(
      '.header-games__btn__stop',
    );

    MENU?.addEventListener('click', (event: Event): void => {
      MENU_ITEMS.forEach(item => {
        item.classList.remove('active');
      });
      if (event.target instanceof Element) {
        event.target.classList.add('active');
      }
    });

    MENU_ITEMS_ABOUT?.addEventListener('click', (): void => {
      HEADER_BTN_GAME_STOP?.classList.add('hidden');
      HEADER_BTN_GAME_START?.classList.remove('hidden');
    });
    MENU_ITEMS_SCORE?.addEventListener('click', (): void => {
      HEADER_BTN_GAME_STOP?.classList.add('hidden');
      HEADER_BTN_GAME_START?.classList.remove('hidden');
    });
    MENU_ITEMS_SETTINGS?.addEventListener('click', (): void => {
      HEADER_BTN_GAME_STOP?.classList.add('hidden');
      HEADER_BTN_GAME_START?.classList.remove('hidden');
    });
    HEADER_BTN_GAME_START?.addEventListener('click', (): void => {
      HEADER_BTN_GAME_START?.classList.add('hidden');
      HEADER_BTN_GAME_STOP?.classList.remove('hidden');
    });
    HEADER_BTN_GAME_STOP?.addEventListener('click', (): void => {
      HEADER_BTN_GAME_STOP?.classList.add('hidden');
      HEADER_BTN_GAME_START?.classList.remove('hidden');
    });
  }
}
