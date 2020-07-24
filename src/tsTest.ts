abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name...')
    }

    abstract printMetting(): void;
}

class Acounting extends Department {
    constructor() {
        super('Acounting...')
    }

    printMetting() : void {
        console.log('Accounting metting...');
    }

    generated() : void {
        console.log('generated...');
    }
}

let department = new Acounting();
department.printName();
department.printMetting();
department.generated();






let myAdd = function(x: number , y: number): number {
    return x + y;
}

let myAdd2: (baseValue: number , incremnet: number) => number  = function(x , y) {
     return x + y;
 }

let myAdd3: (baseValue: number , incremnet: number) => number  = (x , y) => {
    return x + y;
}

console.log(myAdd(3 , 5));
console.log(myAdd2(5 , 7));
console.log(myAdd3(5 , 10));

let tuple: [string, number];
tuple = ['b', 2];
tuple.push(3);
tuple.push('c');
console.log(tuple);
