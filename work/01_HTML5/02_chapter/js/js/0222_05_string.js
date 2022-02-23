// // 문제1
// // 주어지는 문자의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램을 작성하세요
// // 입력예시 : CodeChallenge2014withMSP
// // 출력예시 : cODEcHALLENGE2014WITHmsp
// // hint ; let a = "aBc"
// // 소문자 > 대문자 a.toUpperCase()
// // 대문자 > 소문자 a.toLowerCase()


// window.onload = function(){
//     let word = prompt('문자열을 입력하세요');
//     for(let i=0; i<word.length; i++){
//         if(word[i] == word[i].toUpperCase()){
//             document.write(word[i].toLowerCase());
//         }else{
//             document.write(word[i].toUpperCase());
//         }
//     }
// }


// // 문제2
// // 입력받은 문자열을 공백을 제거하고 출력하세요
// // split()
// // 입력예시 : black sheep wall
// // 출력예시 : blacksheepwall

// let word = prompt('문자열을 입력하세요').split(" "); // 공백이든 뭐든 자르기가 가능함

// document.write(word[0]+word[1]+word[2]);

// // 정수 입력
// let word = prompt('문자열을 입력하세요').split(" ").map(Number);
// document.write(word[0]+word[1]+word[2]);



// // 문제3
// // 괄호로 이루어진 문자열이 입력된다
// // 여는 괄호의 개수와 닫힌 괄호의 개수를 출력한다
// // hint : if - (여는괄호 변수에 저장 / else if) 닫는괄호 변수에 저장
// // 입력에서 : ((())()(()))
// // 출력예시 : 6 6

// let word = prompt('괄호를 입력하세요');
// let openCount = 0;
// let closeCount = 0;

// for(let i=0; i<word.length; i++){
//     if(word[i] == "("){
//         openCount += 1;
//     }
//     else if(word[i] == ")"){
//         closeCount += 1;
//     }
// }
// document.write(openCount + " " + closeCount);


// // 문제4
// // 어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하세요
// // 입력 : 공백이 없는 문자열이 한 줄 입력된다(10글자 이하)
// // hint : indexOF, lastIndexOF 사용 추천
// // 입력예시 : test
// // 출력예시 : 1 4

// let word = prompt("문자를 입력하세요");
// let tCount = 0;

// for(let i=0; i<word.length; i++){
//     if(word[i] == "t"){
//         tCount = i+1;
//     }else{
//         tCount = " ";
//     }
//     document.write(tCount);
// }


