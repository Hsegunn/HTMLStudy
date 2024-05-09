document.open();

// function quiz
// function calculate(command, a, b)
// command: add, sub, divide, mul
// return

// function cal(command ,a, b){
//     switch(command){
//         case 'add':
//             return a + b;
//             break;
//         case 'sub':
//             return a - b;
//             break;
//         case 'divide':
//             return a / b;  
//             break;
//         case 'mul':
//             return a * b;
//             break;
//         default:
//             console.log("오류")
//     }
// }
// console.log(cal('add', 1,2));

// console.clear();
// 함수를 입력파라미터로 받을 때는 함수이름을 전달
// function doSomething(add1){
//     console.log(add1);
//     const res3 = add1(2,3);
//     console.log(res3);

// }
// function add1(a, b){
//     const sum = a + b;
//     return sum;
// }
// doSomething(add1);

// 콜백의 다형성
function add(num1, num2){
    return num1 + num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function surpise(callback){         
    const result = callback(2,3);
    console.log(result);
}
surpise(mul);