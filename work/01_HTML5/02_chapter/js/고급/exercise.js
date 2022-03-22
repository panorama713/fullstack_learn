// let x = 2;

// let result = x % 2 ? "홀수" : "짝수";

// // 3항 연산자
// // 조건식 참:거짓;
// let result2 = (x % 2 == 0)? "짝수" : "홀수"; // 보면 바로 알 수 있는걸로 짜는게 좋음



// // 참 : 1, true
// // 거짓 : 0
// // while(조건문 == 참)

// console.log(result);

// // 거듭제곱
// // 3**2

// console.log(2**10);
// let elem = null;

// // elem이 null 또는 undefined 이면 undefined를 결과로 출력하고
// // 아니면 value를 출력한다
// let value = elem?.value;

// console.log(value);

// // 병합 연산자

// // a ?? b
// // a 가 b도 아니고 undifined도 아닐때

// // x = (a !== null && a !== undefined) ? a : b;


// let firstName = null;
// let lastName = null;
// let nickName = "바이올렛";

// console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자");

// 연습문제
// 아래 함수 선언문을 화살표 함수로 고쳐서 결과를 출력해 보세요


// let result =  (a, b) => a + b;

// console.log(result(3, 5));


// // 연습문제 2
// let result = (a, b) => a - b;

// console.log(result(5, 2))

// // 연습문제 3
// function MyPrint() {
//     let res = "hello";
//     return res;
// }

// let aa = () => {
//     let bb;
//     return bb;
// }

// let result =  () => {
//     let res = "Hello";
//     return res;
// }
// console.log(result())

// 연습문제 4
// function MyPrint02(param) {
//     let res = param + " world";
//     return param;
// }

// let result = MyPrint02("hello");
// console.log(result);

// let result = (param) => {
//     let res = param + " world";
//     return res;
// };
// console.log(result("hello"));

// 연습문제 5

// 죽시 실행 함수
// let result = ((a, b, c) => {
//     let res = (a + b + c) / 3;
//     return res;
// })(1,2,3);
// console.log(result);

// // 연습문제 6
// function MyComSum(a,b) {
//     let res = a + b**2;
//     res += " 입니다."
//     return res;
// }

// let result = MyComSum(2,3);
// console.log(result)

let result = (a,b) => {
    let res = a + b**2;
    res += " 입니다"
    return res;
}
console.log(result(2,3))