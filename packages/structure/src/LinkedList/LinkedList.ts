import { LinkedListMethods } from "./LinkedList.interface";
import LinkedListNode from "./LinkedListNode";

export default class LinkedList<T = any> implements LinkedListMethods<T> {
  head: LinkedListNode<T> | null = null;

  constructor(values: T[] = []) {
    values.forEach((value) => this.append(value));
  }

  append(value: T): LinkedListNode<T> {
    let current = this.head;
    const node = new LinkedListNode<T>(value);

    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return node;
  }

  prepend(value: T): LinkedListNode<T> {
    const node = new LinkedListNode<T>(value);
    let current = this.head;

    if (!current) {
      this.head = node;
    } else {
      node.next = current;
      this.head = node;
    }

    return node;
  }

  find(value: T): LinkedListNode<T> | undefined {
    let current = this.head;

    if (!current) {
      return undefined;
    }

    while (current) {
      if (current && current.value === value) {
        return current;
      }

      current = current.next;
    }

    return undefined;
  }

  insert(value: T, index: number): LinkedListNode<T>;
  insert(value: T, node: LinkedListNode<T>): LinkedListNode<T>;
  insert(value: T, indexOrNode: number | LinkedListNode<T>): LinkedListNode<T> {
    const node = new LinkedListNode<T>(value);
    let current = this.head;
    const index = typeof indexOrNode === "number" ? indexOrNode : undefined;

    if (!current) {
      this.head = node;
      return node;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index) {
      for (let i = 1; i < index; i++) {
        if (!current.next) {
          break;
        }

        current = current.next;
      }
    } else {
      while (current.next) {
        if (current === indexOrNode) {
          break;
        }

        current = current.next;
      }
    }

    node.next = current.next;
    current.next = node;

    return node;
  }

  delete(value: T): LinkedListNode<T> | undefined;
  delete(node: LinkedListNode<T>): LinkedListNode<T> | undefined;
  delete(valueOrNode: T | LinkedListNode<T>): LinkedListNode<T> | undefined {
    throw new Error("Method not implemented.");
  }

  reverse(): LinkedList<T> {
    let current = this.head;
    let previous: LinkedListNode<T> | null = null;
    let next: LinkedListNode<T> | null = null;

    while (current) {
      next = current.next;

      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;

    return this;
  }

  toArray(): T[] {
    let current = this.head;
    const data: T[] = [];

    while (current) {
      data.push(current.value);
      current = current.next;
    }

    return data;
  }

  clear(): void {
    this.head = null;
  }
}
