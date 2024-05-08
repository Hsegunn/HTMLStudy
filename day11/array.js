/* 배열 */
// const arr1 = new Array();
// const arr2 = [1,2,3,4,5];
// console.log(arr2);

// const fruits = ['🍒','🍍']
// console.log(fruits);
// for
// for(let i= 0; i < 2; i++){
//     console.log(fruits[i]);
// }
// for of
// for(let fruit of fruits){
//     console.log(fruit);
// }
// forEach
// fruits.forEach(function (fruit, index, array){
//     console.log(fruit, index, array);
// });

// fruits.forEach((fruit, index) => {      // 에로우 함수(화살표 함수)
//     console.log(fruit, index);
// });

// fruits.forEach((fruit) => console.log(fruits));

let ary = [1,2,3,4,5];
console.log(ary.length);
ary.push(10);       // 배열의 원소를 마지막에 추가
console.log(ary.length);
console.log(ary);

ary.unshift(0);     // 배열의 첫번째 요소로 추가 
console.log(ary.length);
console.log(ary);

ary.pop();     // 배열의 마지막 요소 삭제
console.log(ary.length);
console.log(ary);

ary.shift();
console.log(ary.length);
console.log(ary);

//splice
const fruits = ['🍒','🍍']
console.log(fruits);
fruits.push('🍒','🍑','🍍','🥥');
console.log(fruits);
fruits.splice(1, 1);    // splice(시작점, 삭제 갯수, 추가 갯수)
console.log(fruits);
fruits.splice(3, 2);
console.log(fruits);
fruits.splice(1, 1, '🥝','🍋');
console.log(fruits);

// concat
const fruits2 = ['🍇','🍈']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));      // 인덱스 리턴(문자위치)
console.log(fruits.includes('🍒'));      // 포함되면 true 없으면 false

