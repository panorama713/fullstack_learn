// // foreach
//         // 매개변수로 주어진 함수를 배열 원소 각각에 대해 반복 실행하는 함수
//         // return 없음
//         // break 걸수없음
//         const myArr = [1,2,3,4,5];

//         myArr.forEach((value, index, array) => {
//             console.log(`요소 : ${value}`);
//             console.log(`요소 : ${index}`);
//             console.log(array);
//             console.log(`---------------`);
//         });

// // forEach #2
// // 매개변수는 사용할 것만 써도 됨 : index, array 생략 가능
// const arr = [0,1,2,3,4,5,6,7,8,9,10];

// arr.forEach((value) => console.log(value));

// // 연습문제 #3
// // 아래를 forEach 바꿔서 출력해 보세요

// const arr = [3,4,5,6,3];

// arr.forEach((value) => console.log(value));

// 연습문제 #4
// 아래를 forEach 바꿔서 출력해 보세요

const strDummy = 'abcde';

// for(let i of strDummy) {
//     console.log(i);
// }

strDummy.forEach((value) => console.log(value));