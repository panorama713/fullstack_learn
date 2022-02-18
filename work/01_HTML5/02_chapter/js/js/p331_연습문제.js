//// 연습문제11

// function cm_chg(){
//     let cm = Number(prompt('cm를 입력하세요'));
//     let result = 0;

//     let inch = cm/2.54;
//     let feet = cm/(12 * inch);
//     result = document.write(cm + '는' + inch + 'inch, ' + feet + 'feet' + '입니다' + "<br>");
// }
// cm_chg()

// // 연습문제 12
// function cylinderVolume(){
//     let radius = Number(prompt('반지름을 입력하세요'));
//     let height = Number(prompt('높이를 입력하세요'));

//     result = alert((radius * radius * Math.PI ) * height);
// }
// cylinderVolume()

// // 연습문제 13
// function digits(){
//     let n = Number(prompt('4자리 숫자를 입력하세요'));
//     let result = '';
    
//     document.write('천의자리 : ' + Math.floor(n/1000) + "<br>");
//     n = n%1000
//     document.write('천의자리 : ' + Math.floor(n/100) + "<br>");
//     n = n%100
//     document.write('백의자리 : ' + Math.floor(n/10) + "<br>");
//     n = n%10
//     document.write('일의자리 : ' + n);
// }
// parseInt(n/1000) 사용가능
// digits()

// // 연습문제 14

// function 띠(){
//     let year = Number(prompt('태어난 년도를 입력하세요.'));
//     let result = '';

//     if(year % 12 ==0){
//         result = document.write('당신은 원숭이띠 입니다.');
//     }else if(year % 12 ==1){
//         result = document.write('당신은 닭띠 입니다.');
//     }else if(year % 12 ==2){
//         result = document.write('당신은 개띠 입니다.');
//     }else if(year % 12 ==3){
//         result = document.write('당신은 돼지띠 입니다.');
//     }else if(year % 12 ==4){
//         result = document.write('당신은 쥐띠 입니다.');
//     }else if(year % 12 ==5){
//         result = document.write('당신은 소띠 입니다.');
//     }else if(year % 12 ==6){
//         result = document.write('당신은 범띠 입니다.');
//     }else if(year % 12 ==7){
//         result = document.write('당신은 토끼띠 입니다.');
//     }else if(year % 12 ==8){
//         result = document.write('당신은 용띠 입니다.');
//     }else if(year % 12 ==9){
//         result = document.write('당신은 뱀띠 입니다.');
//     }else if(year % 12 ==10){
//         result = document.write('당신은 말띠 입니다.');
//     }else if(year % 12 ==11){
//         result = document.write('당신은 양띠 입니다.');
//     }
// }
// 띠()

// // 배열로 만들기

// let year = Number(prompt('년도를 입력하세요'));

// let arr = ['원숭이띠', '...']
// let exp = year % 12;

// for(let i = 0; i < 12; i++){
//     if(exp == i){
//         document.write(arr[i]);
//         break;
//     }
// }

// // 연습문제 15
// for (let i = 0; i < 10; i++){
//     for(let j = 0; j <=i; j++){
//         document.write('🌿');
//     }
//     document.write('<br>');
// }

// let num = prompt('숫자');
// let result = "";

// for(let i=0;i<num; i++){
//     // 중첩되는거라 첫번째는 한개 두번째는 두개... 마지막은 10개
//     result += "🌿";
//     document.write(result + "<br>");
// }


// //연습문제 17
// let JavaScript = {
//     이름: 'C# 프로그래밍(2판)',
//     초판발행: '2019년 12월 10일',
//     지은이: '윤인성',
//     펴낸이: '김태현'
// };

// document.write(JavaScript.이름)


// 연습문제 16
function factorial(num){
    let result = 1;

    for(let i = 1; i <= num; i++){
        console.log;
        result *= i;
    }
    return result;
}

let inp_num = Number(prompt('숫자를 입력해 주세요'));
alert(factorial(inp_num));