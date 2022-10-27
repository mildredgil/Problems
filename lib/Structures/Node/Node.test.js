"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
test("Node", () => {
    const p = new Node_1.Node(1);
    expect(p.data).toBe(1);
});
