import LinkedList from "./LinkedList";
import LinkedListNode from "./LinkedListNode";

export interface LinkedListMethods<T> {
  clear(): void;
  toArray(): T[];
  find(value: T): LinkedListNode<T> | undefined;
  append(value: T): LinkedListNode<T>;
  prepend(value: T): LinkedListNode<T>;
  reverse(): LinkedList<T>;
  insert(value: T, index: number): LinkedListNode<T>;
  insert(value: T, node: LinkedListNode<T>): LinkedListNode<T>;
  delete(value: T): LinkedListNode<T> | undefined;
  delete(node: LinkedListNode<T>): LinkedListNode<T> | undefined;
}
