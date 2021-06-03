import { Component, RootElement } from '../app.api';
import { CounterService } from '../counter.servise';

export class Page implements Component {
  private readonly page: HTMLElement;

  constructor(
    private readonly root: RootElement,
    private readonly counterService: CounterService,
  ) {
    counterService.increment();
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'hello from page';
    this.root?.appendChild(this.page);

    return this.page;
  }
}
