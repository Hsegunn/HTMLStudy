// 일치 연산자
// let num = 10;
// let str = '10';
// if(num == str) console.log('같다');     // 값 비교
// if(num === str) console.log('같다');    // 값+타입비교
// else console.log('다르다');

//  console.log(0 == false);       // 동등연산자
//  console.log(0 === false);      // 일치연산자
//  console.log('' == false);
//  console.log('' === false);
//  console.log(null === undefined);
//  console.log(null === undefined);

// 제어문
// 선택제어문
// if
// const name = 'adam';
// if(name === 'adam'){
//     console.log("Welcome adams");
// }else if(name === 'scott'){
//     console.log("Welcome scott!");
// }else{
//     console.log("Unknown user");
// }
// console.log(name === 'smith' ? 'yes' : 'no');

// switch
// const browser = 'IE';
// switch(browser){
//     case 'IE':
//         console.log('Microsoft');
//         break;
//     case 'FireFox':
//         console.log('Mozilla');
//         break;
//     case 'Chrome':
//         console.log('Google');
//         break;
//     default:
//         console.log('unknown');
//         break;
// }
// 입력한 숫자가 3의 배수인지 확인하는 프로그램
// let num = prompt("입력: ");
// if(num === null){
//     alert("다시 입력하세요");
// }else if(num%3 === 0){
//     alert("3의 배수")
// }else{
//     alert("3의 배수가 아님")
// }

// let session = prompt("관심세선 선택: 1.마케팅, 2. 개발, 3. 디자인");

// switch(session){
//     case '1':
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
//         break;
//     case '2':
//         document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
//         break;
//     case '3':
//         document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
//         break;
// }
// * <script>태그에 defer 속성이 있다면 document객체를 바로 사용할 수 없음
// * document.open()을 사용하여 해결

// 반복문
// for
// for (let i = 5; i > 0; i--){
//     console.log(`for: ${i}`);
// }

// let sum = 0;
// for (let i = 1; i <=100; i++){
//     sum += i;
// }
// document.write("<h1>1부터 100을 더한 값:</h1>" + sum);

// let arr = [10,20,30,40,50];
// for (let i = 0; i < 5; i++){
//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i);
// }

// let i = 5;
// while(i > 0){
//     console.log(`while: ${i}`);
//     i--;
// }

// 입력된 구구단 출력
// let select = prompt("구구단 숫자입력");
// switch(select){
//     case '1':
//         for (let i = 1; i <= 1; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;
//     case '2':
//         for (let i = 2; i <= 2; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;
//     case '3':
//         for (let i = 3; i <= 3; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;
//     case '4':
//         for (let i = 4; i <= 4; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;
//     case '5':
//         for (let i = 5; i <= 5; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;    
//     case '6':
//         for (let i = 6; i <= 6; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break; 
//     case '7':
//         for (let i = 7; i <= 7; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break; 
//     case '8':
//         for (let i = 8; i <= 8; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;
//     case '9':
//         for (let i = 9; i <= 9; i++){
//             for(let j = 1; j <= 9; j++){
//                 console.log(`${i}X${j}=${i*j}`);
//             }
//         }
//         break;               
// }

// 1단~9단 출력

// for (let i = 1; i <= 9; i++){
//     for(let j = 1; j <= 9; j++){
//         console.log(`${i}X${j}=${i*j}`);
//     }
// }

// 0~20까지 4의배수 출력(continue)
// for (let i = 0; i <= 20; i++) {
//     if (i % 4 !== 0) {
//         continue; // 4의 배수가 아니면 반복을 실행
//     }
//     console.log(i); // 4의 배수 출력
// }

// 입력된 숫자만큼 카운트
// let i = prompt("숫자입력");
// while(i > 0){
//     console.log(`카운트: ${i}`);
//     i--;
// }