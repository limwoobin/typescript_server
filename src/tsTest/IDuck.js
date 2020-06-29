var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log('Quacl!');
    };
    return MallardDuck;
}());
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quack = function () {
        console.log('redQuack');
    };
    return RedheadDuck;
}());
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
