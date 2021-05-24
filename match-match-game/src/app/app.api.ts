export interface Component {
  render(): HTMLElement;
}

export interface WithRender {
  render(): HTMLElement;
}

export interface Route {
  path: string;
  Component: new () => WithRender;
}

export type RootElement = HTMLElement | null;
