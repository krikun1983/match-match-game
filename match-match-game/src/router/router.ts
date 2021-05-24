import { Route } from '../app.api';

export class Router {
  private get notFound404Route(): Route {
    const notFound404route = this.routes.find((route) => route.path === '**');

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
    });
  }

  private getCurrentRoute(): Route {
    const currentRoute = this.routes.find(
      (route) => route.path === this.getCurrentPath(),
    );
    return currentRoute ?? this.notFound404Route;
  }

  private getCurrentPath(): string {
    return window.location.hash.slice(1).toLowerCase() || "/";
  }

  private navigateToDefaultRoute(): void {
    window.location.href = `${window.location.origin}#${this.getCurrentPath() || this.routes[0]?.path}`;
  }
}
