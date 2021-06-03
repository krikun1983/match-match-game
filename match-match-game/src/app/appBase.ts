import { Component, RootElement } from './app.api';
import { CounterService } from './counter.servise';
import { Page } from './page/page';

export class AppBase implements Component {
  readonly application: HTMLDivElement;

  constructor(
    private readonly root: RootElement,
    private readonly counterServise: CounterService,
  ) {
    this.application = document.createElement('div');
    counterServise.subscribeOnCounter((counter: number) =>
      console.log(counter),
    );
  }

  render(): HTMLElement {
    this.application.innerHTML = 'hello from application';
    this.root?.appendChild(this.application);
    this.application.appendChild(
      new Page(this.application, this.counterServise).render(),
    );

    return this.application;
  }
}
