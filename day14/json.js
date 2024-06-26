// 1. boolean to JSON
let json = JSON.stringify(true);
console.log(json);

// 2. array to JSON
JSON.stringify(['apple','banana']);
console.log(json);

// 객체는 []로 묶어서 표현, 배열은 ([])로 묶어서 표현
[1, true, 'str', {inkey: "value"}, null]
// 숫자
{key : 1}
// 문자열
{key : "str"}
// 오브젝트
{key : {inkey : "value"}}
// null
{key : null}
 
// 3. 오브젝트 to JSON
const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${this.name} can jump!!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 프롬퍼티만 선택출력
json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

//콜백
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

// json >>> object
console.clear();
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'birthday' ? new Date(value) : value;
});
console.clear();
console.log(obj1.birthDate);
console.log(obj1.birthDate.getDate());

