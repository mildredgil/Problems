import { Node } from "../Node";

interface LinkedListType<T> {
  add(options: { data?: T; node?: Node<T> }): void;
  size(): number;
  getLastNode(): Node<T> | null;
  search(data: T): Node<T> | null;
  deleteNode(data: T): void;
}
export class LinkedList<T> implements LinkedListType<T> {
  private head: Node<T> | null = null;
  private nodesCount: number = 0;

  public getLastNode(): Node<T> | null {
    if (this.head == null) return this.head;

    let p = this.head;

    while (p.next != null) {
      p = p.next;
    }

    return p;
  }
  public add(options: { data?: T; node?: Node<T> }): void {
    let p;
    if (options.data) p = new Node(options.data);
    else if (options.node) p = options.node;
    else throw Error("Add a data value or a valid Node");

    const last = this.getLastNode();

    if (last == null) this.head = p;
    else last.next = p;

    this.nodesCount++;
  }

  public size(): number {
    return this.nodesCount;
  }

  public search(data: T): Node<T> | null {
    if (this.head == null) return this.head;

    let p: Node<T> | null = this.head;
    while (p != null) {
      if (p.data === data) return p;
      p = p.next;
    }
    return null;
  }

  public deleteNode(data: T): void {
    if (this.head == null) return;

    let p: Node<T> | null = this.head;
    let q: Node<T> = p;

    while (p != null) {
      if (p.data == data) {
        q.next = p.next;
        if (p == this.head) this.head = null;
        p = null;

        this.nodesCount--;
        return;
      }
      q = p;
      p = p.next as Node<T>;
    }
  }
}
