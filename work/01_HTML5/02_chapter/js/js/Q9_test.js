// // 연습문제
// // 함수의 변환값을 이용해서 아래를 출력해 주세요
// // 값 1이 입력되면 "hello", 값 2가 입력되면 "world"출력
//함수의 선언(정의)
// 무언가 실행문을 만들어 놓은것 ( 코드 재활용을 위해서 )

// function hello_world() {
//         let num = prompt("숫자를 입력하세요");
//         let result = "";
    
//         if(num == 1){
//             result = "hello";
//         }else if(num == 2){
//             result = "world";
//         }else{
//             result = "false";
//         }
//         return result;
//     }
//     document.write(hello_world());

    // // 2번 연습문제

    // // 함수의 반환값을 이용해서 아래를 출력해 주세요
    // // 0이 입력되면 "false" 그 외에는 "true" 출력

    // function false_true(){
    //     let num = prompt('숫자를 입력해 주세요');
    //     let result = "";

    //     if(num == 0){
    //         result = "false";
    //     }else{
    //         result = "true";
    //     }
    //     return result;
    // }
    // alert(false_true());

//     // 도전과제
//     // 함수의 반환값을 이용해서 아래를 출력해보세요
//     // 1부터 n까지의 정수합을 출력해 보세요

//     function sumN(){
//         let n = prompt('숫자를 입력하세요');
//         let result = 0;

//         for(let i = 1; i <= n; i++){
//             // 오른쪽의 값을 왼쪽에 계속 더함(합 누적)
//             result += i;
//         }
//         return result;
//     }
// document.write(sumN())


// // 함수의 반환값을 이용해서 작성해주세요
// // 두수를 입력받아서 큰 수를 출력하세요

// function big(){
//     let num1 = prompt('첫 번째숫자를 입력하세요');
//     let num2 = prompt('두 번째 숫자를 입력하세요');
//     let result = "";

//     if(num1 > num2){
//         result = num1;
//     }else{
//         result = num2;
//     }
//     return result;
// }
// document.write(big());

// // 연습문제2
// // 함수로 n까지의 곱을 출력하세요

// function multiple(){
//     let n = prompt('숫자를 입력하세요');
//     // 곱해야해서 0이 들어가면 값이 항상 0 으로 나옴
//     // 때문에 result에 1을 넣음
//     let result = 1;

//     for(i = 1; i <= n; i++){
//         result = result * i;
//     }
//     return result;
// }
// document.write(multiple())

// // 연습문제3
// // 두수 a와 b를 입력받아 함수로 만들어서 a부터 b까지 출력해보시오

// function numList(){
//     let a = prompt('숫자 a');
//     let b = prompt('숫자 b');
//// 문자열일때 "", 숫자일때 0  을 입력
//     let result = "";

//     if(a < b){
//         for(i = a; i <= b; i++){
//             result += i;
//         }
//     }else{
//         for(i = b; i <= a; i++){
//             result += i;
//         }
//     }
//     return result;
// }
// document.write(numList())

// // 도전과제
// // n값을 입력받아 구구단 출력하기

// function multiNum(){
//     let n = prompt("몇단을 출력할까요?");
//     let result = 1;
    
//     document.write(n + "단 입니다" + "<br>")
//     for(i = 1;i <= 9;i++){
//         result = document.write(n + '*' + i + '=' + (n * i) + "<br>"); 
//     }
//     return result;
// }
// multiNum()
// multiNum()
// multiNum()
// multiNum()
// multiNum()
// multiNum()

// // 도전과제
// // 두 수가 입력된 후
// // 최대공약수를 구하는 함수를 만들어서 최대공약수를 출력하세요


// function GCD(){
//     let num = prompt('첫 번째숫자를 입력하세요');
//     let num2 = prompt('두 번째 숫자를 입력하세요');
//     let result = 0;
//     let minValue = 0;

//     if( num < num2 ){
//         minValue = num;
//     }else{
//         minValue = num2;
//     }
//     for(i = minValue; i > 1; i--){
//         if(num % i == 0 && num2 % i == 0){
//             console.log(result);
//             result = i;
//             break;
//         }
//     }return result;
// }
// document.write(GCD());


// // 연습문제 4
// // 어떤 두 수 a, b를 입렵받는다
// // a에서 b까지 수 중에서 3의 배수만 더하여서 출력하시오
// // 단, a <= b
// // 입력값 3, 7 출력값 9

// function multipleSum(){
//     // Number을 붙여야 숫자로 인식을 한다 ㅅㅂ
//     let a = Number(prompt('첫 번째 숫자를 입력하세요'));
//     let b = Number(prompt('두 번째 숫자를 입력하세요'));
//     let result = 0;

//     for(let i = a; i <= b; i++ ){
//         if(i % 3 == 0){
//             result += i;
//             }
//     }return result;
// }
// alert(multipleSum())

// 도전과제
// 5개의 정수들의 최대값과 최소값을 구하는 프로그램을 구하시오
// arr = [3, 7, 10, 6, 4]
// Math.max.apply(null, arr), Math.min.apply(null, arr)

function max_min(){
    arr = [3, 7, 10, 6, 4];

    document.write('최대값은' + Math.max.apply(null, arr) + '입니다' + '<br>');
    document.write('최소값은' + Math.min.apply(null, arr) + '입니다' + '<br>');
}
max_min()

// 정답 
function max_func(){
    let arr = 
    let max
}