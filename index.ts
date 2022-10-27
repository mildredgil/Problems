import { LinkedList } from "./Structures/LinkedList";
import { Node } from "./Structures/Node";

console.log("Node -------");
const p = new Node(1);
const q = new Node(2);
p.next = q;
console.log(p.next.data);

console.log("LinkedList -------");
const list = new LinkedList();
let last = list.getLastNode();
console.log("get last: ", last?.data);
console.log("insert data: 3");
list.add({ data: 3 });
last = list.getLastNode();
console.log("get last: ", last?.data);
console.log("insert node: q", q.data);
list.add({ node: q });
last = list.getLastNode();
console.log("get last: ", last?.data);
