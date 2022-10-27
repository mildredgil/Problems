"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("../Node");
class LinkedList {
    constructor() {
        this.head = null;
    }
    getLastNode() {
        if (this.head == null)
            return this.head;
        let p = this.head;
        while (p.next != null) {
            p = p.next;
        }
        return p;
    }
    add(options) {
        let p;
        if (options.data)
            p = new Node_1.Node(options.data);
        else if (options.node)
            p = options.node;
        else
            throw Error("Add a data value or a valid Node");
        const last = this.getLastNode();
        if (last == null)
            this.head = p;
        else
            last.next = p;
    }
}
exports.LinkedList = LinkedList;
