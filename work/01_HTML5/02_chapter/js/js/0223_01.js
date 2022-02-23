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

// let word = prompt("문자열을 입력해 주세요");
// let pos = word.indexOf('t') + 1;
// let lastPos = word.lastIndexOf('t') + 1;

// document.write(pos + " " + lastPos);
// document.quertSelector(')



// // 도전과제
// // 영어 소문자로 구성된 단어 s1, s2, s3가 있을때
// // s1의 마지막 문자가 s2의 첫 글자와 같고,
// // s2의 마지막 글자가 s3의 첫 글자와 같고,
// // s3의 마지막 글자가 s1의 첫 글자와 같으면 순환 문자열이라고 한다
// // 순환문자열이면 good출력, 아니면 bad출력
// // 입력예시 : turtle error robot
// // 출력예시 : good

// let s1 = prompt("첫 번째 문자를 입력하세요");
// let s2 = prompt("두 번째 문자를 입력하세요");
// let s3 = prompt("세 번째 문자를 입력하세요");

// if(s1[s1.length-1] == s2[0] && s2[s2.length-1] == s3[0] && s3[s3.length-1] == s1[0]){
//     document.write("good");
// }else{
//     document.write("bad");
// }

// // 선생님 해답
// let word = prompt('문자열을 입력해 주세요').split(" ");
// let fWord = word[0]; // turtle
// let sWord = word[1]; // error
// let tWord = word[2]; // robot

// if(fWord[fWord.length-1] == sWord[0] && sWord[sWord-1] == tWord[0] && tWord[tWord-1] == fWord[0]){
//     document.write("good");
// }else{
//     document.write("bad");
// }

// // 문제5
// // 알파벳 한 단어가 입력된다
// // 대문자 IOI가 입력되면, IOI is International Olymiad
// // 그 외에는 I dont care. 를 출력하세요
// // 입력예시 : IOI
// // 출력예시 : IOI is International Olymiad

// let word = prompt('문자열을 입력하세요');

// if(word == "IOI"){
//     document.write("IOI is International Olymiad");
// }else{
//     document.write("I dont care.")
// }
// // document.querySelector('#result').innerHTML = ""


// // 아스키코드
// // 한문자 => 아스키코드 : 인코더
// // 예시 : let word = "abc";
// //       Letter.charCodeAt(0) = word.charCodeAt(0);
// // 아스키코드 => 한 문자 : String.fromeCharCode(문자) : 디코더

// // 도전과제
// // 인터넷 서비스들은 대부분 아이디와 패스워드를 이용한다
// // 이때 사용되는 패스워드는 여러가지 방법으로 암호화되어 저장된다
// // 1번 암호화방법 : 입력받은 문자의 아스키코드값 + 2
// // 2번 암호화방법 : 입력받은 문자의 (아스키코드값 * 7) % 80 + 48
// // 입력예시 : TEST
// // 출력예시 : VGUV
// //          L3EL

// let pas = prompt('비밀번호를 입력하세요');
// let pas1 = "";
// let pas2 = "";

// for(let i=0; i<pas.length; i++){
//     pas1 = pas.charCodeAt(i)+2;
//     document.write(String.fromCharCode(pas1));
//     // document.query("#").innerHTML += 
// }document.write("<br>")
// for(let i=0; i<pas.length; i++){
//     pas2 = (pas.charCodeAt(i)*7) % 80 + 48;
//     document.write(String.fromCharCode(pas2));
// }


// // 문제6
// // 두 값을 입력받아 그 사이에 있는 문자를 출력하세요
// // 입력 : a f
// // 출력 : a b c d e f

// let word1 = prompt("첫 번째 영어를 입력하세요");
// let word2 = prompt("두 번째 영어를 입력하세요");
// let result = "";

// for(let i=word1.charCodeAt(0); i<=word2.charCodeAt(0); i++){
//     // let word1 = word1.charCodeAt(i);
//     // let word2 = word2.charCodeAt(i);
//     document.write(String.fromCharCode(i) + " ");
// }

// // 해답
// window.onload = function(){
//     let word = prompt("문자를 입력해 주세요").split(" ");
//     let fLetter = word[0].charCodeAt(0); // a
//     let sLetter = word[1].charCodeAt(0); // f

//     for(let i=fLetter; i<=sLetter; i++){
//         document.querySelector("#result").innerHTML += String.fromCharCode(i) + " ";
//     }
// }

// 문제7
// 배열안에 문자를 정렬해서 출력해 주세요
// 입력 : 5 8 2
// 출력 : 2 5 8
// 배열의 오름차순 정렬 : sort()
// let arr = [2, 8, 5]
// result = arr.sort(); // [2, 5, 8]

// 배열의 중앙을 중심으로 변경 : reverse()
// let arr = [2, 8, 5]
// result = arr.reverse(); // [5, 8, 2]

let arr1 = [7, 4, 3];

arr1.sort();
document.write(arr1 + "<br>");

arr1.reverse();
document.write(arr1)