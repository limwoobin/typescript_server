"use strict";
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo('x', 'y', 'z');
console.log(foo.x);
// console.log(foo.y);
// console.log(foo.z);
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
    }
}
//# sourceMappingURL=Foo.js.map