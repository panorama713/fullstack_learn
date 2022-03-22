// // 연습문제 #1
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
// }];

// ages = user.map((user) => user.age);

// console.log(ages);


// // 연습문제 #2
// // 아래 형태를 map을 사용하는 형태로 출력하시오

let numbers = ["가","나","다"];
// let result = [];

// for(let i=0; i<numbers.length; i++) {
//     result[i] = numbers[i] + " 붙임";
// }
// console.log(result);

// // A
// let result = numbers.map((value) => {
//     return value + " 붙임";
// });
// console.log(result);

//연습문제 #3
//아래 형태의 map을 사용하여 이름만 출력하는 형태로 출력하세요

let members = [
    { name: "YD", age: 22},
    { name: "Ya", age: 21},
    { name: "Ye", age: 23},
    { name: "Yt", age: 24}
];
// let names = []; 

let names = members.map((value) => console.log(value.name));