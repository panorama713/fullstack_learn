// while(true){
//     let letter = prompt('문자를 입력해 주세요');
//     document.write(letter + "<br>");
//     if(letter=='q'){
//         break;
//     }
// }

// // 연습문제 11번
// // 연도, 월, 일이 닷(.)으로 구분되어 입력된다.
// // 대시(마이너스 기호)를 구분기호로 사용해서 일-월-연도로 바꿔 출력한다.
// // hint : split('.') 사용
// // 입력 : 2020.3.4
// // 출력 : 4-3-2020

// let n = prompt('연도.월.일 을 적으시오').split(".");

// document.write(n[2] + "-" + n[1] + "-" + n[0]);

// // 연습문제 12번
// // 시간을 입력받아 분만 출력하기
// // 입력 : 17:23:57
// // 출력 : 23

// let now = '17:23:57'.split(":");

// document.write(now[1])


// // 연습문제 13번
// // 입력 : hello world
// // 출력 : helloworld

// let a = "hello world".split(" ");

// document.write(a[0]+a[1]);

// // 연습문제 14번
// // 정수 1개가 입력된다
// // 부호를 바꿔 출력한다.
// // 입력 : -1
// // 출력 : 1

// let n = -20;

// document.write(n * (-1));

// // 연습문제 15번
// // 입력 : 정수 2개를 입력받는다.
// // 출력 : 첫번째 줄에 합
// //          두번째 줄에 차
// //          세번째 줄에 곱
// //          네번째 줄에 몫
// //          다섯번째 줄에 나머지

// let n = 2
// let n2 = 3

// document.write(n+2+"<br>");
// document.write(n-2+"<br>");
// document.write(n*2+"<br>");
// document.write(n/2+"<br>");
// document.write(n%2+"<br>");


// // 연습문제 16번
// // 두정수를 입력받는다.
// // a가 b보다 작은 경우 True, 그렇지 않은 경우 False 출력
// // 입력 1 : 1
// // 입력 2 : 9
// // 출력 : True

// let a = 1
// let b = 9

// if(a < b){
//     document.write('true');
// }else{
//     document.write('false');
// }

// // 연습문제 17번
// // 두정수를 입력받는다.
// // 둘 다 1일 경우 True 아닐 경우 False

// let n = 1;
// let r = 2;

// if(n == 1 && r == 1){
//     document.write('true');
// }else{
//     document.write('false');
// }

// 연습문제 18번
// 정수 3개를 입력받아 가장 작은수 출력하기
// 입력 1 : 3
// 입력 2 : -1
// 입력 3 : 5
// 출력 : -1

let result;
let n = Number(prompt('숫자를 입력하세요'));

for(let i=0; i<3; i++){
    
}
let result = sort(n[0]);
Document.write(result);


// 연습문제 19번
// 정수 1개가 입력된다. (0 ~ 100)
// 출력 : 0부터 그 수까지 줄을 바꿔 한개씩 출력한다.
// 입력 예시 : 4
// 출력 예시 : 0
//                1
//                2
//                3
//                4 