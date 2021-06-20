export type Component = {
  render(): HTMLElement;
};

export default interface Route {
  path: string;
  Component: new () => Component;
}

export type MyRecord = {
  firstName: string;
  lastName: string;
  email: string;
  imagesLoad: string;
  score: string | null;
};

export type RootElement = HTMLElement;
