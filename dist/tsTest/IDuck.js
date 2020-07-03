"use strict";
class MallardDuck {
    quack() {
        console.log('Quacl!');
    }
}
class RedheadDuck {
    quack() {
        console.log('redQuack');
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
//# sourceMappingURL=IDuck.js.map