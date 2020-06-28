var Foo4 = /** @class */ (function () {
    function Foo4(prop) {
        this.prop = prop;
    }
    Foo4.staticMethod = function () {
        return 'staticMethod';
    };
    Foo4.prototype.prototypeMethod = function () {
        return this.prop;
    };
    return Foo4;
}());
console.log(Foo4.staticMethod());
var foo = new Foo4(123);
// console.log(foo.staticMethod());
