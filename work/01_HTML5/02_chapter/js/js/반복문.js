// window.onload = function() {
//     let i = 1;
//     while( i < 10 ){
//         document.write(i + "<br>");
//         i++;
//     }
// }

// window.onload = function (){
//     let j = 1;
//     while(j > 3){
//         document.write("j : " + (j++) + "<br>");
//     }

//     do{
//         document.write("j : " + (j++) + "<br>");
//     }while(j > 3);
// }

// window.onload = function(){
//     // for문의 구성( 변수 초기화, 변수의 조건 설정, 증감표현)
//     for (let i = 1; i < 10; i++){
//         document.write(i + "<br>");
//     }
// }

// for ( let i = 0; i < 1000; i++){
//     document.write("출력");
// }

// for ( let i = 0; i < 5; i++){
//     if( i < 5 - i ){
//         document.write("  ");
//     }else if ( 0 < i - 1 )
//     document.write("🥺");
// }

// document.write("---for array---");
// let arr = [3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     document.write(i + " "); // 배열의 인덱스 (위치)
// }

// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + " "); // 배열의 값
// }

// document.write("---for in---" + "<br>");
// for(let i in arr){
//     document.write(i + " " + "<br>");
// }

// let arr = [1, true, "JavaScript"];

// let result = "<table border=1><tr>";

// for (let idx in arr){
//     // +=는 오른쪽에것을 왼쪽에 한번 더한 후 실행하겠다는 의미
//     result += "<td>" + arr[idx] + "</td>";
// }
// result += "</tr></table>";

// document.write(result);

// for(let value of arr){
//     document.write(value + " ");
// }

// let arr = [가, 나, 다, 라];

// arr[0] = '윤';

// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);
// alert(arr[3]);

// for(let value of arr){
//     document.write(alert(arr));
// }

// let arr = [10, 20, 30, 40, 50];

// alert(arr.length);
let i = 0;
let arr = ['가', '나', '다'];

while( i < arr.length){
    alert(i + '번째 출력:' + arr[i]);
    i++;
}

let 