// // 배열 연습문제
// // 공백을 기준으로 n개의 데이터가 입력된다
// // n개의 데이터를 입력의 역순으로 출력한다
// // 입력 : 1 3 5 6 8
// // 출력 : 8 6 5 3 1
// // let inputString = prompt("숫자를 입력하세요").split(" ").map(Number);

// // let num = prompt('몇번 입력할까요?');
// // for(let i=0; i<num; i++){
// //     let arr = prompt('숫자를 입력하세요')
// //     arr = arr[i]
// // }
// let inputString = prompt("숫자를 입력하세요").split(" ").map(Number);
// for(let i=inputString.length-1; i>=0; i--){  
//     document.write(inputString[i] + " ")
// }

// let result = inputString.reverse();
// for(let i of result){
//     document.write(i + " ")
// }
// // 연습문제2
// // k개의 정수들이 공백으로 구분되어 입력된다
// // k개의 숫자들을 입력받은 순서대로 출력하고,
// // 한번 더 출력한다(총2번)
// // 입력 예시 1 2 3
// // 출력 예시 1
// //         2
// //         3
// //         1
// //         2
// //         3

// let inputString = prompt("숫자를 입력하세요").split(" ").map(Number);

// for(let j=0; j<2; j++){
//     for(let i=0; i<inputString.length; i++){ //// for(let i of inputString)
//         document.write(inputString[i] + "<br>")
//     }
// }


// // 문제3
// // k값이 입력된다
// // k번째 숫자가 무엇이었는지 출력한다
// // 입력예시 1 : 10 9 8 7 6 5 4 3 2 1
// // 입력에시 2 : 3
// // 출력예시 : 8

// let inputString = prompt("숫자를 입력하세요").split(" ").map(Number);

// let num = prompt("몇번째 숫자를 출력할까요?")
// document.write(inputString[num-1])