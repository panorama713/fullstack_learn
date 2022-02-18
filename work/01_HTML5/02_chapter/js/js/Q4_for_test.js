// // 1부터 100까지 공백으로 띄워 하나씩 출력해보세요

// for(i = 1; i <= 100; i++){
//     document.write(i + " ");
// }

// // 어떤 수 n을 입력받아 1부터 n까지 숫자를 출력해 보세요

// let number = prompt('숫자를 입력하세요');

// for(i = 1; i <= number; i++){
//     document.write(i + " ");
// }

// // 도전과제
// // 어떤 두수 a, b가 있을 때 두 수 사이의 모든 정수를 순서대로 출력해보세요
// // 입력 : 3
// // 입력 : 8
// // 출력 : 3 4 5 6 7 8

// document.write("===도전과제===" + "<br>");
// let a = prompt('1번째 숫자를 입력하세요');
// let b = prompt('2번째 숫자를 입력하세요');
// for(i = a; i <= b; i++){ //<<<<여기에 변수 < 변수 < 변수 이런 형태는 안됨
//     document.write(i + " ");
// }

// 도전과제 
// 어떤 두수  a, b가 있을 때 두 수 사이의 홀수만 순서대로 출력해 보세요
// 입력 : 3
// 입력 : 8
// 출력 : 3 5 7

document.write("===도전과제===" + "<br>");
let a = prompt("첫 번째 숫자");
let b = prompt("두 번째 숫자");
for(i = a; i <= b; i++){
    if(i % 2 == 1){
        document.write(i);
    }
}
