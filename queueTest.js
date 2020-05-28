const Queue = require('./Queue.js');

const q1 = new Queue();
//每两个删除一个数，然后又从头开始，直到剩下最后一个数。
function ts(ary) {
    for(let i = 0,j=ary.length;i<j;i++){
        q1.enqueue(ary[i]);
    }
    let index = 0;
    while(q1.size() !== 1 ){
        let temp = q1.dequeue();
        index += 1;
        if(index % 3 != 0 ){
            q1.enqueue(temp);
        }
    }
    return q1.head();
}

const array = [];
for(let i=0,j=99;i<j;i++){
    array.push(i);
}

console.log(ts(array));

//使用队列计算斐波那契数列的第n项
const q2 = new Queue();
function ts1(n){
    if(n<2)return;
    q2.enqueue(1);
    q2.enqueue(1);
    let index = 0;
    while(index < n-2 ){
        let del_item = q2.dequeue();
        let head_item = q2.head();
        let next_item = del_item + head_item ;
        q2.enqueue(next_item);
        index++;
    }
    return q2.tail();
}

console.log(ts1(7));

//两个队列模拟栈

const q3 = Symbol('q3');
const q4 = Symbol('q4');
class Queue2Stack{
    constructor(){
        this[q3] = new Queue();
        this[q4] = new Queue();
        this.data_queue = null;
        this.empty_queue = null;

        this.init_queue = function(){
            if(this[q3].isEmpty()){
                this.data_queue = this[q4];
                this.empty_queue = this[q3];
            }else{
                this.data_queue = this[q3];
                this.empty_queue = this[q4];
            }
        }
    }
    push(item){
        this.init_queue();
        this.data_queue.enqueue(item);
    }
    top(){
        this.init_queue();
        return this.data_queue.tail();
    }
    pop(){
        this.init_queue();
        while(this.data_queue.size() > 1){
            this.empty_queue.enqueue(this.data_queue.dequeue());
        }
        return this.data_queue.dequeue();
    }
}

const s1 = new Queue2Stack();

s1.push(1);
s1.push(2);
console.log(s1.top());
s1.pop();
console.log(s1.top());

//打印杨辉三角

function print_yh(n){
    const q5 = new Queue();
    q5.enqueue(1);

    for(let i = 1;i<=n;i++){
        let line = "",
            pre = 0,
            nbsp = '';
        for(let k = 0;k < n - i;k++){
            // 添加空格
            nbsp += ' ';
        }
        for(let j = 0;j<i;j++){
            let item = q5.dequeue();
            line += item + ' '
            let next_item = item + pre;
            pre = item;
            q5.enqueue(next_item);
        }
        q5.enqueue(1);
        console.log(nbsp + line);
    }
}

print_yh(10);