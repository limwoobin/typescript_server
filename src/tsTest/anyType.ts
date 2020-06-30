let anyValue:any = 50;
console.log(anyValue);

anyValue = true;
console.log(anyValue);

anyValue = '50';
console.log(anyValue);

const v1: boolean = anyValue;
console.log(v1);

function hello(msg: string): void {
    console.log(`Hello ${msg}`);
}

const hi:void = hello('zzz');
console.log(hi);

console.log(hello('world'));