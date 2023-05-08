let firstnum = 3;
let secnum = 2;
let op = '+';

function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case 'x':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }
}
console.log(operate(op,firstnum,secnum));
function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function multi(num1,num2){
    return num1 * num2;
}
function devi(num1,num2){
    return num1 / num2;
}
