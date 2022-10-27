import { Node } from "../Node";
import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  it("creates LinkedList", () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
  });

  it("getLastNode(): expected to be null in empty list", () => {
    const list = new LinkedList();
    expect(list.getLastNode()).toBeNull();
  });

  it("add(): Node(data: 1) to List", () => {
    const list = new LinkedList();
    list.add({ data: 1 });

    expect(list.size()).toBe(1);
    expect(list.getLastNode()?.data).toBe(1);
  });

  it("add(node: 1) to List", () => {
    const list = new LinkedList();
    list.add({ node: new Node(1) });

    expect(list.size()).toBe(1);
    expect(list.getLastNode()?.data).toBe(1);
  });

  it("add(): 3 nodes to List", () => {
    const list = new LinkedList();
    list.add({ node: new Node(1) });
    list.add({ node: new Node(2) });
    list.add({ data: 3 });

    expect(list.size()).toBe(3);
    expect(list.getLastNode()?.data).toBe(3);
  });

  it("add(): get error when nor data or node is provided", () => {
    const list = new LinkedList();
    expect(() => list.add({})).toThrowError();
  });

  it("search(): valid data", () => {
    const list = new LinkedList();
    const values = [1, 11, 2, 33];

    values.forEach((data) => {
      list.add({ data });
    });

    values.forEach((data) => {
      expect(list.search(data)?.data).toBe(data);
    });
  });

  it("search(): invalid data", () => {
    const list = new LinkedList();
    const values = [1, 11, 2, 33];

    values.forEach((data) => {
      list.add({ data });
    });

    expect(list.search(5)).toBeNull();
  });

  it("search(): when LL is empty search returns null", () => {
    const list = new LinkedList();

    expect(list.search(1)).toBeNull();
  });

  it("deleteNode(): delete the head Node", () => {
    const list = new LinkedList();
    list.add({ data: 1 });
    list.deleteNode(1);
    expect(list.size()).toBe(0);
    expect(list.search(1)).toBeNull();
  });

  it("deleteNode(): delete middle Node", () => {
    const list = new LinkedList();
    list.add({ data: 1 });
    list.add({ data: 2 });
    list.add({ data: 3 });
    list.deleteNode(2);
    expect(list.size()).toBe(2);
    expect(list.search(2)).toBeNull();
  });

  it("deleteNode(): delete last Node", () => {
    const list = new LinkedList();
    list.add({ data: 1 });
    list.add({ data: 2 });
    list.add({ data: 3 });
    list.deleteNode(3);
    expect(list.size()).toBe(2);
    expect(list.search(3)).toBeNull();
  });
});
