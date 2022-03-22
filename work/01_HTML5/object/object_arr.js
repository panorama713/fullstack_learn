const data = [{
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛미디어"
},{
    name: "HTML5 웹 프로그래밍 입문",
    price: 26000,
    publisher: "한빛아카데미"
}];

// // 문자열로 변환된 객체 출력
// console.log(JSON.stringify(data));
// // 그냥 객체 출력
// console.log(data);

// 문자열로 변환된 객체 출력 stringify
let js = JSON.stringify(data);

console.log(js);

// 객체 -> 문자열 : js
// 문자열로 변환된 것을 객체로 출력 parse
console.log(JSON.parse(js));