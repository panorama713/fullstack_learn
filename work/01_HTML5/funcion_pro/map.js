// // map #1
// // 주어진 값들을 오름차순으로 접근해서 새로울 값을 만들고 반환(return)
// // return값이 있음

// let numbers = [1,2,3,4,5];
// let result = numbers.map(number => number * number);

// console.log(numbers);
// console.log(result);


// // map #2
// // 매개변수를 자바스크립트 내장함수로 넘겨서 새로운 배열 구하기
// let numbers = [1,2,3,4,5];
// let squares = numbers.map(Math.sqrt);

// console.log(squares);

// // map #3
// // 객체 조작
// let users = [{
//     name: "YD",
//     age: 22
// },{
//     name: "Bill",
//     age: 32
// },{
//     name: "Andy",
//     age: 21
// },{
//     name: "Roky",
//     age: 35
// }]

// // 객체 속성 중에서 나이만 뽑은 새로운 배열을 만들어 출력
// let ages = [];
// ages = users.map((user) => user.age);

// console.log(ages);

// 연습문제 #1
// 아래 형태를 map을 사용하는 형태로 출력하세요
let numbers = [1,2,3];
let result =[];

// for(let i=0; i<numbers.length; i++) {
//     result.push(numbers[i] + numbers[i]);
// }

 

result = numbers.map((value) => value + value);
console.log(result);