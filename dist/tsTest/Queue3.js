"use strict";
class Queue3 {
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
// number 전용
const numberQueue = new Queue3();
numberQueue.push(0);
numberQueue.push(1);
console.log(numberQueue.pop().toFixed());
console.log(numberQueue.pop().toFixed());
// string 전용
const stringQueue = new Queue3();
stringQueue.push('hello');
stringQueue.push('world');
console.log(stringQueue.pop().toUpperCase());
console.log(stringQueue.pop().toUpperCase());
// custom 
const myQueue = new Queue3();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 15 });
console.log(myQueue.pop());
console.log(myQueue.pop());
//# sourceMappingURL=Queue3.js.map