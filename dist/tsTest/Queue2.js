"use strict";
class Queue2 {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
class NumberQueue extends Queue2 {
    push(item) {
        super.push(item);
    }
    pop() {
        return super.pop();
    }
}
const queue = new NumberQueue();
queue.push(0);
queue.push('1');
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
//# sourceMappingURL=Queue2.js.map