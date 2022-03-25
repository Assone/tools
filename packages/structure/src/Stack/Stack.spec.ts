import Stack from "./Stack";

describe("Stack", () => {
  it("create", () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.size).toBe(3);
  });

  it("get the top", () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.top).toBe(3);

    stack.pop();
    expect(stack.top).toBe(2);
  });

  it("get the size", () => {
    const stack = new Stack();

    expect(stack.size).toBe(0);

    stack.push(1);
    expect(stack.size).toBe(1);
  });

  it("get the is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty).toBe(true);

    stack.push(1);
    expect(stack.isEmpty).toBe(false);
  });

  it("use push", () => {
    const stack = new Stack();

    expect(stack.top).toBe(undefined);

    stack.push(1);
    expect(stack.top).toBe(1);
  });

  it("use pop", () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.size).toBe(3);

    stack.pop();
    expect(stack.size).toBe(2);
  });

  it("use clear", () => {
    const stack = new Stack([1, 2, 3]);

    expect(stack.size).toBe(3);

    stack.clear();
    expect(stack.size).toBe(0);
  });
});
