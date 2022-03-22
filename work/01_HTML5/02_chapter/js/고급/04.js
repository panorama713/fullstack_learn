function Dog(color, name, age, family){
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family
    }
}

let myDog = new Dog("검정색","곰",3,"불독");
console.log(myDog.hasOwnProperty('color'))
console.log(myDog.hasOwnProperty("breed"));
console.log(myDog.hasOwnProperty("class"));