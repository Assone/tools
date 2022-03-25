import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  it("created", () => {
    const linkedList = new LinkedList<number>([1, 2, 3]);

    expect(linkedList.size).toBe(3);
  });

  it("get the size", () => {
    const linkedList = new LinkedList();

    expect(linkedList.size).toBe(0);

    linkedList.append(1);
    expect(linkedList.size).toBe(1);
  });

  it("use find", () => {
    const linkedList = new LinkedList([1, 2, 3, 4, 5]);

    expect(linkedList.find(3)).toBeTruthy();

    expect(linkedList.find(6)).toBeFalsy();
  });

  it("use to array", () => {
    const linkedList = new LinkedList([1, 2, 3]);

    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  it("use travel", () => {
    const linkedList = new LinkedList([1, 2, 3]);

    expect(linkedList.travel().toArray()).toEqual([3, 2, 1]);
  });
});
