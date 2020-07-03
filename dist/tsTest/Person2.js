"use strict";
class Person2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person) {
    person.sayHello();
}
const me = new Person2('Lee');
greeter(me);
//# sourceMappingURL=Person2.js.map