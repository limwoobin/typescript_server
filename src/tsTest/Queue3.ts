class Queue3<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T {
        return this.data.shift();
    }
}

// number 전용
const numberQueue = new Queue3<number>();
numberQueue.push(0);
numberQueue.push(1);

console.log(numberQueue.pop().toFixed());
console.log(numberQueue.pop().toFixed());


// string 전용
const stringQueue = new Queue3<string>();
stringQueue.push('hello');
stringQueue.push('world');

console.log(stringQueue.pop().toUpperCase());
console.log(stringQueue.pop().toUpperCase());

// custom 
const myQueue = new Queue3<{name: string , age: number}>();
myQueue.push({name: 'Lee' , age: 10});
myQueue.push({name: 'Kim' , age: 15});

console.log(myQueue.pop());
console.log(myQueue.pop());