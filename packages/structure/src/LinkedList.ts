interface LinkedListMethods<T> {
  find(value: T): LinkedListNode<T> | undefined;
  append(value: T): LinkedListNode<T>;
  insert(value: T, index: number): LinkedListNode<T>;
  insert(value: T, node: LinkedListNode<T>): LinkedListNode<T>;
  delete(value: T): LinkedListNode<T>;
  delete(node: LinkedListNode<T>): LinkedListNode<T>;
  travel(): LinkedList<T>;
  toArray(): T[];
}

class LinkedListNode<T> {
  next: LinkedListNode<T> | null = null;

  constructor(public value: T, next = null) {
    this.next = next;
  }
}

// compare
class LinkedList<T = any> implements LinkedListMethods<T> {
  head: LinkedListNode<T> | null = null;

  constructor(values: T[] = []) {
    values.forEach((value) => this.append(value));
  }

  /**
   * find node by value
   * @param value find the value in the list
   * @returns linked list node or undefined
   */
  find(value: T): LinkedListNode<T> | undefined {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return undefined;
  }

  /**
   * append a node to the end of the list
   * @param value append value to the end of the list
   * @returns linked list node
   */
  append(value: T): LinkedListNode<T> {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return node;
  }

  /**
   * linked list from array
   * @returns value of the linked list
   */
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  /**
   * travel the linked list
   * @returns linked list
   */
  travel(): LinkedList<T> {
    let current = this.head;
    let next: LinkedListNode<T> | null = null;
    let prev: LinkedListNode<T> | null = null;

    while (current) {
      next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;

    return this;
  }

  /**
   * delete node by index or node
   * @param value value or linked list node
   */
  delete(value: T): LinkedListNode<T>;
  delete(node: LinkedListNode<T>): LinkedListNode<T>;
  delete(value: LinkedListNode<T> | T): LinkedListNode<T> {
    if (!this.head) {
      return null;
    }

    const compareMethod =
      value instanceof LinkedListNode
        ? (a: LinkedListNode<T>, b: LinkedListNode<T> | T) => a === b
        : (a: LinkedListNode<T>, b: LinkedListNode<T> | T) => a.value === b;
    let current = this.head;
    let prev: LinkedListNode<T> | null = null;

    while (current) {
      if (compareMethod(current, value)) {
        break;
      }

      prev = current;
      current = current.next;
    }

    if (!current) {
      return null;
    }

    if (!prev) {
      this.head = current.next;
    }

    if (current.next) {
      prev.next = current.next;
    } else {
      prev.next = null;
    }

    return current;
  }
}
