function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "마루", 1);
delete myDog.age;

console.log("우리집 강아지의 나이는 " + myDog.age + "살 입니다")