//10보다 작은수면 small을 출력, 크면 아무것도 출력하지 않음

// window.onload = function () {
//     let name = prompt("숫자를 입력하세요");
//     if (name < 10) {
//         document.write('small');
//     }else{
//     }
// }
// if( 3 <= month && month <= 5) {
//     let str = document.getElementById("text");
//     str.innerHTML = "봄입니다.";}

// 10보다 작은 수가 입력되면 small을 출력, 10이상이면 big을 출력하세요.

// window.onload = function () {
//     let name = prompt("숫자를 입력하세요");
//     if (name < 10) {
//         document.write('small');
//     }else if( name > 10 ){
//         document.write('big');
//     }
// }

// 도전과제
// 정수 2개를 각각 받아서 첫번째수가 크면 small
// 두 번째 수가 크면 big을 출력하세요.

// window.onload = function(){
//     let x = prompt('첫 번째 숫자를 입력하세요.');
//     let y = prompt('두 번째 숫자를 입력하세요.');
//     if (x > y) {
//         document.write('small');
//     }else if(x < y) {
//         document.write('big');
//     }
// }

// 도전과제 2
// 인혁이는 숫자 7을 좋아한다.
// 어떤 정수가 입력되면 그 수가 7의 배수인지 확인하세요
// 7의 배수이면 multiple 아니면 not multiple을 출력하세요

// window.onload = function(){
//     let i = prompt('정수를 입력하세요');
//     if(i % 7 == 0) {
//         document.write('multiple');
//     }else{
//         document.write('not multiple');
//     }
// }

// 어떤 자연수가 입력되었을때 그 수 가 홀수이면 "odd",
// 짝수이면 "even"을 출력하세요

window.onload = function(){
    let i = prompt('정수를 입력하세요');
    if( i % 3 == 0){
        document.write('odd');
    }else{
        document.write("even");
    }
}

// 도전과제 3
// 터널의 높이에 따라 출력값을 표시하시오
// 170보다 작으면 "충돌"
// 170이면 "정상통과"
// 170이상이면 "무난히 통과"를 출력하시오.

window.onload = function(){
    let i = prompt("숫자를 입력하세요.")
    if( i < 170 ){
        document.write("충돌");
    }else if( i == 170){
        document.write("정상통과");
    }else{
        document.write("무난히 통과");
    }
}

// 윤년 판별
// 2월이 29일까지 있는 해를 윤년이라고 한다
// 어떤 해가 입력되면 그 해가 윤년인지 아닌지 판별하세요
// 1. 해(year) 가 4의 배수이면서 100의 배수가 아니면 윤년
// 2. 400의 배수이면 윤년
// 위의 두 조건 중 하나라도 맞으면 윤년이다.
// 윤년이면 yes출력, 아니면 no를 출력하세요.

window.onload = function(){
    // let date = new Date();
    // let year = date.getFullYear();
    let year = prompt('년도를 입력하세요');
    if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.write('yes');
    }else{
        document.write('no');
    }
}