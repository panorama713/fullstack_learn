// // addNum라는 이름의 함수를 정의함
// document.write("<br>" + "===함수 단순 실행===" + "<br>");
// function addNum(x, y){
//     document.write(x + y);
// }

// addNum(2, 3);
// // 이건 실행문임


// // return의 모양
// document.write("<br>" + "===함수 반환값===" + "<br>");
// function multiNum(x, y){
//     return x * y; // x와 y를 곱한 결과를 반환함
// }

// let num = multiNum(3, 4); // multiNum()함수가 호출된 후, 그 반환값이 변수 num에 저장됨
// document.write(num);


// document.write("<br>" + "===동일한 기능의 함수 만들기===" + "<br>");

// function sqr(x){
//     return x * x;
// }
// // sqrNum를 sqr과 같게 변수선언함
// let sqrNum = sqr;
// // 결과적으로 같은 값이 반환됨
// document.write(sqr(4));
// document.write(sqrNum(4));

// document.write("<br>" + "===함수 선언===" + "<br>");
// function 함수(){
//     alert('함수_01');
//     alert('함수_02');
// };
// alert(typeof(함수) + ':' + 함수);

// var 함수 = function () {alert('함수_A');};
// var 함수 = function () {alert('함수_B');};

// 함수();

// //함수를 선언
// var 함수 = function () {
//     alert('함수')
// };
// 함수();

// var 함수 = function () { alert('함수_A');};
// function 함수 () {alert('함수_B');};
// 함수();

// 매개변수와 반환 값

//함수를 호출
// alert('매개변수');
// var minutes = date.getMinutes();
// var secounds = date.secounds();

// alert('minutes');

// function f(x){
//     return x * x;
// }
// alert(f(3));

// function f(x){
//     return 2 * x + 1;
// }
// alert(f(3));

// function f(x){
//     return (3 * x * x) + (52 * x) + 273;
// }
// alert(f(3));


// // 1~100까지의 숫자를 3으로 나누고 나머지가 0 이하인 값은 출력하지 않고
// // 0 이상인 값은 나머지를 출력하는 코드를 만드시오

// function f(i){
//     return i % 3;
// }
// if(f(i) < 0){
// for(i = 0; i < 100; i++){
    
//         document.write((i+1) + " ");
//     }else{
//         document.write((i + 1) + " ");
//     }
// }

// // 연습문제
// // 함수로 만들어서 123을 출력하는 프로그램을 작성하세요

// function 출력() {
//     return 123;
// }
// document.write(출력());

// 함수로 만들어서 홀수가 입력되면 odd
// 짝수가 입력되면 even을 출력하는 프로그램을 작성하시오

// // 반환값으로 만들어보기

// function 출력(){
//     let result = "123";
//     return result;
// }
// alert(출력());


// function 홀짝(){
//     let result = i % 2;
//     return result;
// }
// let i = prompt('숫자를 입력하세요');
// if(홀짝() == 1){
//     document.write('odd');
// }else{
//     document.write('even');
// }

// function even_odd() {
//     let num = prompt("숫자를 입력하세요");
//     let result = "";

//     if( num % 2 ==0){
//         result = "even";
//     }else {
//         result = "odd";
//     }
//     return result;
// }
// document.write(even_odd());

// //문제

// // index.js에서 meetAt 함수를 만들어주세요.

// // 인자를 세개 받습니다.
// // 첫번째 인자는 년도에 해당하는 숫자입니다.
// // 두번째 인자는 월에 해당하는 숫자입니다.
// // 세번째 인자는 일에 해당하는 숫자입니다.
// // 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
// // 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.
// // 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요.
// // meetAt(2022); // 결과 --> "2022년"
// // meetAt(2032, 3); // 결과 --> "2032년 3월"
// // meetAt(1987, 10, 28); // 결과 --> "1987/10/28"

// function meetAt(year, month, date) {
//     let todayYear = year;
//     let todayMonth = month;
//     let todayDate = date;

//     if (todayDate) {
//         return `${todayYear}/${todayMonth}/${todayDate}`;
//       }
//       if (todayMonth) {
//         return `${todayYear}년 ${todayMonth}월`;
//       }
//       if (todayYear) {
//         return `${todayYear}년`;
//       }
// }
// alert(meetAt(2022, 1, 2));

// 16. for 문
// 문제

// findSmallestElement 함수를 구현해 주세요.

// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.

// 만일 arr 가 비어있으면 0을 리턴 해주세요.

// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.

function findSmallestElement(){
    let n = prompt('반복될 횟수를 입력하세요.');
    for(i = 0; i < n; i++){
        let arr[i] = prompt((i+1) + '번째 함수를 입력하세요');
    }
}
alert(findSmallestElement());