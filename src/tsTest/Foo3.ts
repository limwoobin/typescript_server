class Foo3 {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;

    constructor() {
        this.MSG = 'hello';
    }

    log() {
        this.MAX_LEN = 10;
        this.MSG = 'HI';

        console.log(`MAX_LEN: ${this.MAX_LEN}`); // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        console.log(`MSG: ${this.MSG}`); // Cannot assign to 'MSG' because it is a constant or a read-only property.
    }
}

new Foo3().log();