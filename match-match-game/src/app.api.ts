export interface Component {
  render(): HTMLElement;
}

export interface WithRender {
  render(): HTMLElement;
}

export interface Route {
  path: string;
  Component: new () => Component;
}

export interface MyRecord {
  firstName: 'string',
  lastName: 'string,'
  email: 'string',
  score: number,
}

export type RootElement = HTMLElement | null;
