var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data = [];
    }
    Queue2.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue2.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue2;
}());
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue2));
var queue = new NumberQueue();
queue.push(0);
queue.push('1');
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
