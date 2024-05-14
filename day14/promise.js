// state: pending -> fulfulled or rejected
// 1. producer
// promise를 생성하는 순간에 자동실행

// const promise = new Promise(() => {
//     console.log("doing something...");
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("doing something");
//     setTimeout(() => {
//         resolve('adam');    // 실행이 정상적으로 완료되면 resolve호출
//     }, 2000);       
// });

// resolve가 전달한 값을 then을 통하여 받아옴
// promise.then((value) => {
//     console.log(value);
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("doing something");
//     setTimeout(() => {
//         resolve('scott');
//        reject(new Error('no network'));    
//     }, 2000);  
// })

// promise.then((resData) => {
//     console.log(resData);
// }).catch((error) => {
//     console.log(error);
// }).finally(() =>{
//     console.log("Run unconditionally");
// })

let fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1);
        }, 1000);
    })
})
.then(num => console.log(num));

// Error
let getHan = () =>          // 중괄호를 사용하면 return이 필요하고 없으면 자동리턴
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ㅇ');
        }, 1000);
    });

let getEgg = (hen) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${hen} => 'X'`);
        }, 1000);
    });
getHan()
.then(hen => getEgg(hen))
.then(Egg => console.log(Egg));