import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  it("created", () => {
    const linked = new LinkedList([1, 2, 3]);

    expect(linked.toArray()).toEqual([1, 2, 3]);
  });

  it("use clear", () => {
    const linked = new LinkedList([1, 2, 3]);

    linked.clear();

    expect(linked.toArray()).toEqual([]);
  });

  it("use toArray", () => {
    const linked = new LinkedList([1, 2, 3]);

    expect(linked.toArray()).toEqual([1, 2, 3]);
  });

  it("use reverse", () => {
    const linked = new LinkedList([1, 2, 3]);

    expect(linked.reverse().toArray()).toEqual([3, 2, 1]);
  });

  it("use append", () => {
    const linked = new LinkedList([1]);

    expect(linked.toArray()).toEqual([1]);

    linked.append(2);
    expect(linked.toArray()).toEqual([1, 2]);
  });

  it("use prepend", () => {
    const linked = new LinkedList<number>([]);

    expect(linked.toArray()).toEqual([]);

    linked.prepend(1);
    expect(linked.toArray()).toEqual([1]);

    linked.append(2);
    linked.append(3);
    linked.prepend(4);
    expect(linked.toArray()).toEqual([4, 1, 2, 3]);
  });

  it("use insert", () => {
    const linked = new LinkedList<number>([]);

    linked.insert(4, 1);
    expect(linked.toArray()).toEqual([1, 4, 2, 3]);

    linked.insert(5, 2);
    expect(linked.toArray()).toEqual([1, 4, 5, 2, 3]);

    const node = linked.find(5);
    linked.insert(6, node!);
    expect(linked.toArray()).toEqual([1, 4, 5, 6, 2, 3]);
  });
});
