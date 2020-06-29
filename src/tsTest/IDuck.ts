interface IDuck {
    quack(): void;
}

class MallardDuck implements IDuck {
    quack() {
        console.log('Quacl!');
    }
}

class RedheadDuck {
    quack() {
        console.log('redQuack');
    }
}

function makeNoise(duck: IDuck): void {
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());

