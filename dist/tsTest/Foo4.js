"use strict";
class Foo4 {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'staticMethod';
    }
    prototypeMethod() {
        return this.prop;
    }
}
console.log(Foo4.staticMethod());
const foo = new Foo4(123);
// console.log(foo.staticMethod());
//# sourceMappingURL=Foo4.js.map