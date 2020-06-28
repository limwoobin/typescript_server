class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

const person = new Person('drogba');
person.walk();


