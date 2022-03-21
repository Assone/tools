interface QueueProperty<T> {
  top: T | undefined;
  size: number;
  isEmpty: boolean;
}

interface QueueMethods<T> {
  add(value: T): void
  remove(): T | undefined
  clear(): void
}

export default class Queue<T = any> implements QueueProperty<T>, QueueMethods<T> {
  constructor(private data: T[] = []) {}

  get top() {
    return this.data[this.data.length - 1];
  }

  get size() {
    return this.data.length;
  }

  get isEmpty() {
    return this.data.length === 0;
  }

  add(value: T) {
    this.data.push(value);
  }

  remove() {
    return this.data.shift();
  }

  clear() {
    this.data = [];
  }
}