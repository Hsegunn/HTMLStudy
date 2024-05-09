// function
// 함수 선언(정의), 호출
// func();      // 함수 호출
// func(){      // 함수 정의
//    ~~~
// }

// function [함수명](입력){ ~~~ };
// function printHello(){
//     console.log("hello");
// }
// 함수 호출
// printHello();

// function log(message){
//     console.log(message);
// }
// log();      // 해당함수는 입력이 있어야함
// log("hi");
// log(123);

// function showError(){
//     alert("에러");
// }
// showError();

// 입력 파라미터를 객체로 받는 함수
// function changeName(obj){
//     obj.name = 'coder';
// }
// const ellie = {name:'ellie'};   // 객체생성
// console.log(ellie);
// changeName(ellie);
// console.log(ellie);

// default 파라미터
// function showMessage(message, from){
//     console.log(`${message} by ${from}`);
// }
// showMessage("hi");

// Rest 파라미터
// function printAll(...args){
//     for(let i=0; i<args.length; i++){
//         console.log(args[i]);
//     }
//     for(const arg of args){
//         console.log(arg);
//     }
//     args.forEach((arg) => console.log(args));
// }
// printAll('dream','coding','javis','adam',1,2);

// 함수 출력
// function add(num1, num2){
//     return num1 + num2;
// }
// const res = add(10,20);
// console.log(res);
// 함수 표현식
// let func = function(){}      // 함수를 변수에 할당
// let showHello = function(){
//     console.log('hello');
// }
// showHello();
// let hiHello = showHello;
// hiHello();

// 즉시 실행함수: 즉시 실행되어 단 한번만 호출되며 다시 호출불가
// let res1 = (function(){
//     let a = 10;
//     let b = 20;
//     return a + b;
// }());
// console.log(res1);

// 입력 파라미터가 있는 즉시 실행 함수
// let res2 = (function(a,b){
//     return a * b; 
// }(10,20));
// console.log(res2);


// 화살표 함수
// let func = () => {};
// const simplePrint = function(){
//     console.log('simplePrint');
// }
// console.log(simplePrint);       // 함수이름은 포인터
// simplePrint();
// const simplePrint1 = () => {console.log(simplePrint);};
// simplePrint1();
// const simplePrint2 = () => {console.log(simplePrint);};
// simplePrint2();

// const add = (a ,b) => { 
//     return a + b;
// };
// console.log(add(10,20));

// const hi = () => {
//     alert("하이요");
// };
// hi();

document.open();
// let hi1 = (user) => {
//     document.write(user + "님 반갑습니다");
// };
// hi1("홍길동");

// 콜백함수
function randomQuiz(answer, printYes, printNo){
    if(answer === 'i love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
console.log("yes");
}
const printNo = function(){
    console.log("no");
}
randomQuiz('i love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// 함수이름은 주소