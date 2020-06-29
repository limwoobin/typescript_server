var Queue3 = /** @class */ (function () {
    function Queue3() {
        this.data = [];
    }
    Queue3.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue3.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue3;
}());
// number 전용
var numberQueue = new Queue3();
numberQueue.push(0);
numberQueue.push(1);
console.log(numberQueue.pop().toFixed());
console.log(numberQueue.pop().toFixed());
// string 전용
var stringQueue = new Queue3();
stringQueue.push('hello');
stringQueue.push('world');
console.log(stringQueue.pop().toUpperCase());
console.log(stringQueue.pop().toUpperCase());
// custom 
var myQueue = new Queue3();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 15 });
console.log(myQueue.pop());
console.log(myQueue.pop());
