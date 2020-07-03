"use strict";
class Animal {
    // 일반 메소드
    move() {
        console.log('roaming the earth ...');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('bowwowo~~');
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
//# sourceMappingURL=Animal.js.map