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

// let department : Department;
let department = new Acounting();
department.printName();
department.printMetting();
department.generated();