import Queue from "./Queue";

describe("Queue", () => {
  it("created", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.length).toBe(3);
  });

  it("get the top", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.top).toBe(1);
    queue.remove();
    expect(queue.top).toBe(2);
  });

  it("get the length", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    queue.add(1);
    expect(queue.length).toBe(1);
  });

  it("get the is empty", () => {
    const queue = new Queue([1]);
    expect(queue.isEmpty).toBe(false);
    queue.remove();
    expect(queue.isEmpty).toBe(true);
  });

  it("use clear", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.length).toBe(3);

    queue.clear();
    expect(queue.length).toBe(0);
  });

  it("use add", () => {
    const queue = new Queue();
    expect(queue.top).toBe(undefined);
    queue.add(1);
    expect(queue.top).toBe(1);
  });

  it("use remove", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.length).toBe(3);
    queue.remove();
    expect(queue.length).toBe(2);
  });
});
