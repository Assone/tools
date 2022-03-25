export default class LinkedListNode<T> {
  next: LinkedListNode<T> | null = null;

  constructor(public value: T, next = null) {
    this.next = next;
  }
}
