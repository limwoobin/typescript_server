class Queue {
    protected data = [];

    push(item) {
        this.data.push(item);
    }

    pop() {
        return this.data.shift();
    }
}

const queue = new Queue();
queue.push(0);
queue.push(1);

console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());


enum Day {
    Monday = 'Monday',
    Sunday = 'Sunday'
}

console.log(Day.Monday);
console.log(Day.Sunday);