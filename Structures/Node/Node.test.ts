import { Node } from "./Node";

describe("Node", () => {
  it("creates Node with value and next null", () => {
    const p = new Node(1);
    expect(p.data).toBe(1);
    expect(p.next).toBeNull();
  });

  it("points Node(p) to Node(q)", () => {
    const p = new Node(1);
    const q = new Node(2);
    p.next = q;
    expect(p.next).not.toBeNull();
    expect(p.next.data).toBe(q.data);
  });
});
