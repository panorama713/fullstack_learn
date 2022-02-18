// let kitty = {
//     name: "나비",
//     family: "코리안 숏 헤어",
//     age: 1,
//     weight:0.1
// };
// document.write("우리 집 새끼 고양이의 이름은 " + kitty.name + "이고, 종은 " + kitty.family + "입니다" + "<br>");


// // 항상 객체를 만들어주고 세미콜론으로 끝내줘야함 
// let product = {
//     제품명: '7D 건조 망고',
//     유형: '당절임',
//     성분: '망고, 설탕, 메타중아, 치자황색소',
//     원산지: '필리핀'
// };


// // 객체에 접근하는 법은
// // product['제품명'] 혹은 product.제품명
// document.write(product.제품명)

// for (let i in product){
//     alert(i + ':' + product[i]);
// }

// let object = {
//     number: 273,
//     String: 'rintiantta',
//     boolean: true,
//     array: [52, 273, 103, 32],
//     method: function(){

//     }
// };

let person = {
    name: '윤인성',
    eat: function(food){
        alert(this.name + '이 ' + food + '을/를 먹습니다.');
    }
};
person.eat('밥')

