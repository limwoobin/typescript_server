"use strict";
class Queue {
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
const queue = new Queue();
queue.push(0);
queue.push(1);
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
var Day;
(function (Day) {
    Day["Monday"] = "Monday";
    Day["Sunday"] = "Sunday";
})(Day || (Day = {}));
console.log(Day.Monday);
console.log(Day.Sunday);
//# sourceMappingURL=Queue.js.map