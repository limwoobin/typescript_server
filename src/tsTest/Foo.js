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
var Foo = /** @class */ (function () {
    function Foo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Foo;
}());
var foo = new Foo('x', 'y', 'z');
console.log(foo.x);
// console.log(foo.y);
// console.log(foo.z);
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        console.log(_this.x);
        console.log(_this.y);
        return _this;
        // console.log(this.z);
    }
    return Bar;
}(Foo));
