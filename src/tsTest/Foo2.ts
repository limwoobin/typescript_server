class Foo2 {
    constructor(public x: string) {

    }
}

const foo = new Foo2('Hello');
console.log(foo);
console.log(foo.x);


class Bar {
    constructor(private x: string) {

    }
}

const bar = new Bar('Hello');
console.log(bar);
// console.log(bar.x);