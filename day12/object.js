/* object - key: 'value' */

// 1. function
// const name = 'adam';
// const age = 4;
// print(name, age);

// function print(name, age){
//     console.log(name);
//     console.log(age);
// }
// 2. object
// const obj1 = {};            // object literal syntax
// const obj2 = new Object();  // object constructor syntax

// const scott = {name: 'scott', age:20};      // 클래스가 없어도 객체 생성
// console.log(scott);
// scott.gender = true;        // 외부에서 속성(프로퍼티) 추가기능
// console.log(scott.gender);
// delete scott.gender;        // 속성(프로퍼티) 삭제
// console.log(scott.gender);

// console.log(scott.name);    // 프로그램 작성 시 
// console.log(scott['name']); // 동적인 경우
// function printValue(obj, key){
//     console.log(obj.key);
//     console.log(obj[key]);
// }
// printValue(scott, 'name');

// in
// console.log('name' in scott);
// console.log('age' in scott);
// console.log('random' in scott);
// for(key in scott) console.log(key);

// const array = [1,2,3,4,5];
// for(value in array) console.log(value);     // 0,1,2,3,4
// for(value of array) console.log(value);     // 1,2,3,4,5

// cloning , copy
const user = {name: 'ellie' , age:19};
const user2 = user;
console.log(user);
console.log(user2);
user2.name = 'alis';
console.log(user);
console.log(user2);

const user3 = {};
Object.assign(user3, user);
console.log(user3);
user2.name = 'adam';
console.log(user);
console.log(user2);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'mid'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);