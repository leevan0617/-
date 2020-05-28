const Stack = require('./Stack.js')

//JS判断字符串小括号是否成对合法
const s = new Stack();
const str = "((afewf)(faef)fa(aef(aewf)waef)afew)"
function test(str){
    for(let i=0,j=str.length;i<j;i++){
        if(str.charAt(i) === '('){
            s.push(str.charAt(i))
        }else if(str.charAt(i) === ')'){
            if(s.isEmpty()){
                return false
            }else{
                s.pop();
            }
        }else{
            continue;
        }
    }
    return s.get().length === 0;
}   
console.log(test(str));

//后缀表达式计算
const s1 = new Stack();
function ts(array){
    for (let i=0,j=array.length;i<j;i++){
        if(["+","-","*","/"].indexOf(array[i]) >= 0){
            let val1 = s1.pop();
            let val2 = s1.pop();
            let val3 = parseInt(eval(val2 + array[i] + val1));
            s1.push(val3);
        }else{
            s1.push(array[i])
        }
    }
    return s1.pop();
}

const result  = ts(["4","13","5","/","+"]);
console.log(result);

//十进制转其他进制

const s2 = new Stack();

function ts1(decNumber,base){
    let rem,
        result = "",
        digits='0123456789ABCDEF';

    while(decNumber > 0){
        rem = Math.floor(decNumber % base);
        s2.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!s2.isEmpty()){
        result += digits[s2.pop()];
    }

    return result;
}

console.log(ts1(100345,2));
console.log(ts1(100345,16));

//返回栈中最小的值

let data_stack = Symbol('data_stack');
let min_stack = Symbol('min_stack');

class MinStack{
    constructor(){
        this[data_stack] = new Stack();
        this[min_stack] = new Stack();
    }
    push(item){
        this[data_stack].push(item);
        if(this[min_stack].isEmpty() || item < this[min_stack].top()){
            this[min_stack].push(item);
        }else{
            this[min_stack].push(this[min_stack].top());
        }
    }
    pop(){
        this[data_stack].pop();
        this[min_stack].pop();
    }
    min(){
        return this[min_stack].top();
    }
}


let min = new MinStack();

min.push(3);
min.push(6);
min.push(8);
console.log(min.min());
min.push(2);
console.log(min.min());
min.pop();
console.log(min.min());