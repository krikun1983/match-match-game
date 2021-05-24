export interface CounterService {
  increment(): void;
  subscribeOnCounter(callback: Function): number
}

export class CounterServiceImplmentation implements CounterService {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  increment(): void {
    this.counter++;
  }

  subscribeOnCounter(callback: Function): number {
    return callback(this.counter);
  }
}
