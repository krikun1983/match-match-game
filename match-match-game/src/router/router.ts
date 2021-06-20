import Route from '../app.types';

export default class Router {
  private get notFound404Route(): Route {
    const notFound404route = this.routes.find(route => route.path === '**');

    if (notFound404route) {
      return notFound404route;
    }

    throw new Error(
      "Route for 404 page wasn't found! Please, provide route for 404 page in your routes array.",
    );
  }

  public constructor(private routes: Route[]) {
    this.navigateToDefaultRoute();
  }

  public onRouteChange(callback: (route: Route) => void): void {
    window.addEventListener('popstate', () => {
      callback(this.getCurrentRoute());

      const currentRoute = this.getCurrentRoute();
      const MenuItemsAbout = document.querySelector(
        '#about',
      ) as HTMLLinkElement;
      const MenuItemsScore = document.querySelector(
        '#score',
      ) as HTMLLinkElement;
      const MenuItemsSettings = document.querySelector(
        '#settings',
      ) as HTMLLinkElement;
      const MENU_ITEMS = document.querySelectorAll('.menu__item > a');
      const MENU_ITEM_CURRENT = 'active';

      const menuItemsRemoveActive = (): void => {
        MENU_ITEMS.forEach(item => {
          item.classList.remove(MENU_ITEM_CURRENT);
        });
      };

      if (currentRoute.path === '/about') {
        menuItemsRemoveActive();
        MenuItemsAbout.classList.add(MENU_ITEM_CURRENT);
      } else if (currentRoute.path === '/score') {
        menuItemsRemoveActive();
        MenuItemsScore.classList.add(MENU_ITEM_CURRENT);
      } else if (currentRoute.path === '/settings') {
        menuItemsRemoveActive();
        MenuItemsSettings.classList.add(MENU_ITEM_CURRENT);
      } else {
        menuItemsRemoveActive();
      }
    });
  }

  private getCurrentRoute(): Route {
    const currentRoute = this.routes.find(
      route => route.path === Router.getCurrentPath(),
    );
    return currentRoute ?? this.notFound404Route;
  }

  private static getCurrentPath(): string {
    return window.location.hash.substr(1).replace(/\//gi, '/');
  }

  private navigateToDefaultRoute(): void {
    window.location.href = `${window.location.origin}#${
      Router.getCurrentPath() || this.routes[0]?.path
    }`;
  }
}
