function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age = age;
}


let myDog = new Dog("흰색", "마루", 1);
let hisDog = new Dog("흰색", "마루", 1); // 깊은 복사 : 모든 프로퍼티의 값이 모두 같은 객체를 생성함

console.log((myDog == hisDog));
console.log((myDog === hisDog));

let herDog =  hisDog
console.log((hisDog == herDog));
console.log((hisDog === herDog));