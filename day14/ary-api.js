// join()
// const fruits = ['apple', 'banana', 'orange'];
// const result = fruits.join(',');
// console.log(result);
// split()
const fruits = '🍒,🥝,🍇,🍍';
const result = fruits.split(',');
console.log(result);

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    };
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 30, false, 60),
    new Student('C', 31, false, 80),
    new Student('D', 32, false, 95),
    new Student('E', 33, true, 90)
];
{
    // find 제일 처음의 요소 리턴
    console.clear();
    const result = students.find(function(student, index){
        console.log(student, index);
        return student.score === 90;
    });
    console.log(result);
}
{
    // 전부 리턴
    console.clear();
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
{
    console.clear();
    // const result = students.map((student) => student);
    // const result = students.map((student) => student.score);
    const result = students.map((student) => student.score * 2);
    console.log(result);

}