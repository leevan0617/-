/**************** 栈 **************/

const stack = Symbol('stack');

class Stack {
    constructor(){
        this[stack] = [];
    }
    get(){
        return this[stack]
    }
    //从栈顶添加元素
    push(...item){
        this[stack].push(...item);
    }
    //弹出栈顶元素
    pop(){
        return this[stack].pop();  
    }
    //返回栈顶元素
    top(){
        return this[stack][this[stack].length - 1]
    }
    //判断栈是否为空
    isEmpty(){
        return this[stack].length === 0;
    }
    //返回栈的大小
    size(){
        return this[stack].length;
    }
    // 清空栈
    clear(){
        this[stack].length = [];
    }
}

module.exports = Stack;