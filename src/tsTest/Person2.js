var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person2;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person2('Lee');
greeter(me);
