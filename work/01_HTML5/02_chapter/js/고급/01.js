// 객체 정의
function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age = age;
}

// 객체 생성
let myDog = new Dog("흰색", "마루", 1);
Dog.prototype.family = "시베리안 허스키";
Dog.prototype.breed = function(){
    return this.color + " " + this.family;
}

let hisDog = new Dog("갈색", "콩이", 3);
// console.log("우리집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + "털이 매력적인 강아지입니다.")
// console.log(myDog.breed())
console.log(myDog.family)
console.log(myDog.breed())
console.log("친구네 집 강아지 품종은 " + hisDog.breed() + "입니다")



// aa()
// // 함수 선언식
// function aa(){
//     return XPathEvaluator;
// }


// // 모던 자바스크립트(고급)
// // 함수표현식
// let dummy = function(a, b){
//     return a+b;
// }