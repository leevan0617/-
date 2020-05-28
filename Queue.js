const items = Symbol('items');
class Queue {
    constructor(){
        this[items] = [];
    }
    enqueue(item){
        this[items].push(item);
    }
    dequeue(){
        return this[items].shift();
    }
    head(){
        return this[items][0];
    }
    size(){
        return this[items].length;
    }
    clear(){
        return this[items] = [];
    }
    isEmpty(){
        return this[items].length === 0;
    }
    tail(){
        return this[items][this[items].length - 1];
    }
}

module.exports = Queue;