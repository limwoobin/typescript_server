var Foo3 = /** @class */ (function () {
    function Foo3() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    Foo3.prototype.log = function () {
        this.MAX_LEN = 10;
        this.MSG = 'HI';
        console.log("MAX_LEN: " + this.MAX_LEN);
        console.log("MSG: " + this.MSG);
    };
    return Foo3;
}());
new Foo3().log();
