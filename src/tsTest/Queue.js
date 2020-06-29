var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
