// class는 template, 데이터가 없음
// object는 class에 데이터를 넣으면 객체가 됨(ES6)

// class Person{
//     constructor(name, age){         // 필드
//         this.name = name;
//         this.age = age;
//     }
//     speak(){        // 메서드
//         console.log(`${this.name}: hello`);
//     }
// }
// const adam = new Person('adam', 40);
// console.log(adam);
// console.log(adam.name);
// console.log(adam.age);
// adam.speak();

// getter , setter
// class User{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get age(){
//         return this._age;
//     }
//     set age(value){
//         this._age = value < 0 ? 0 : value;
//     }
// }
// const user1 = new User('hong', 'kil', -1);
// console.log(user1.age);

// 생성자없이 필드를 작성하면 public, '#' 붙이면 private
// class Exper{
//     publicField = 2;
//     #privateField = 0;
// }
// const exper = new Exper();
// console.log(exper.publicField);
// console.log(exper.privateField);

// static: static을 붙이면 클래스 멤버가 됨
// 클래스 이름으로 접근해야함
// 각 객체마다 만들어지지 않고 공통으로 사용되는 데이터나 메서드에 사용
// class Article{
//     static publisher = 'Dream Coding';
//     constructor(articleNumber){
//         this.articleNumber = articleNumber;
//     }
//     static printPublisher(){
//         console.log(Article.printPublisher);  
//     }
// }
// const article1 = new Article();
// article1.printPublisher();
// console.log(Article.publisher);  

// inheritance
// class Shape{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     draw(){
//         console.log(`drawing ${this.color} color of`)
//     }
//     getArea(){
//         return this.width * this.height;
//     }
// };
// class Rectangle extends Shape{};
// const rectangle = new Rectangle(20,20,'blue');
// rectangle.draw();
// overriding
// class Triangle extends Shape{
//     getArea(){
//         return (this.width * this.height) / 2;
//     }
// };
// const tri = new Triangle(20,20,'red');
// console.log(tri.getArea());

// instanceof : 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 오브젝트인지 확인
// 모든 오브젝트들은 최상위 object 클래스를 상속
// console.log(tri instanceof Rectangle);
// console.log(tri instanceof Triangle);
// console.log(tri instanceof Shape);
// console.log(tri instanceof Object);

class Counter{
    constructor(){
        this.count = 0;
    }
    increase(){
        this.count++;
        console.log(this.count);
    }
}
const colCounter = new Counter();
colCounter.increase();
colCounter.increase();
colCounter.increase();