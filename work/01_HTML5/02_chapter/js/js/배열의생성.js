let arr = [배열오소1, 비열요소2]; // 배열 리터럴을 이용하는 방법
let arr = Array(배열요소1, 배열요소2); // Array 객체의 생성자를 이용하는 방법
let arr = new Array(배열요소1, 배열요소2); // new 연산자를 이용한 Array 객체 생성 방법

let arrList = [1, true, "JavaScript"];
let arrObj = Array(1, true, "JavaScript");
let arrNewObj = new Array9(1, true, "javascript");

document.write(arrList + "<br>");
document.write(arrObj + "<br>");
document.write(arrNewObj);

let arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함
let element = arr[0];

arr[1] = 10; // 비열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남

document.write("배열 arr의 요소에는 (" + arr + ")가 들어있습니다." + "<br>");
document.write("배열 arr의 길이는 " + arr.length + "입니다.");
// + 나타낼 변수 + 플러스 사이에 변수를 적으면 나타낼 수 있음

let arr = [1, true, "Java "]

arr.push("Script"); // push() 메소드를 이용하는 방법
document.write(arr + "<br>"); // 1, ture, java, script

arr[arr.length]=100; // length 프로퍼티를 이용하는 방법

document.write(arr + "<br>"); 

arr[10] = "자바스크립트";
document.write(arr + "<br>");
document.write(arr[7]);