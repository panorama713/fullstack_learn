// // filter #1
// // 펑션의 조건이 참인 결과만 선택해서 새로운 배열을 만듭니다

// let numbers = [1,2,3,4,5];

// let result = numbers.filter((number) => number > 3);
// // 원본배열
// console.log(numbers)
// // filter 적용
// console.log(result)


// // filter #2

// let guys = [
//     { name: "yd", money: 500000 },
//     { name: "bill", money: 400000 },
//     { name: "andy", money: 300000 },
//     { name: "roky", money: 200000 }
// ];

// let rich = guys.filter((man) => man.money > 300000);

// console.log(rich);

// // 연습문제 #1
// // 아래를 filter로 쓰는 형태로 만들어 보세요

// let numbers = [1,2,3,4,5];
// // let result = [];

// // for(let i=0;i<numbers.length;i++){
// //     if(numbers[i] < 3){
// //         result.push(numbers[i]);
// //     };
// // };
// // console.log(result);

// let number = numbers.filter((min) => min < 3);
// console.log(number)

// 연습문제 #2
// 아래를 filter 함수로 바꾸시오

// let numbers = [1,2,3,4,5];
// // let result = [];

// // for(let i=0; i<numbers.length; i++) {
// //     if( numbers[i] > 2 && numbers[i] < 4) {
// //         result.push(numbers[i]);
// //     };
// // };
// // console.log(result)

// let result = numbers.filter((value) => value > 2 && value < 4);
// console.log(result);


// 연습문제 #3
// 이름이 yd 인 사람의 money를 뽑아내서 새로운 배열을 생성하고
// 출력해 보세요

let guys = [
    { name: "yd", money: 500000 },
    { name: "bill", money: 400000 },
    { name: "andy", money: 300000 },
    { name: "roky", money: 200000 }
];

let result = guys.filter((value) => value.name == "yd");
console.log(result);