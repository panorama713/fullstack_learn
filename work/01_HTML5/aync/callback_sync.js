// // 동기 프로그램
// // 물건값 계산 펑션
// // return: 총 물건값
// function buy_normal(item, price, quantity) {
//     console.log(item + " 상품을" + quantity + "개 골라서 점원에게 주었습니다.")
//     console.log("계산이 필요합니다.");
//     // 물건값
//     let total = price * quantity;
//     return total;
// }
// // 물건을 지불하는 펑션
// function pay(tot) {
//     console.log(tot + "원을 지불하였습니다.");
// }
// let result = buy_normal("고구마", 1000, 5);
// pay(result);


// 비동기 프로그램
function buy_asis(item, price, quantity, callback) {
    console.log(item + " 상품을" + quantity + "개 골라서 점원에게 주었습니다.")

    // 비동기 방식으로 동작하는 부분
    setTimeout(function() {
        console.log("계산이 필요합니다.");
        // 물건값
        let total = price * quantity;
        // 펑션이 들어올 자리
        callback(total);
    },2000);
    
}
// 물건을 지불하는 펑션
function pay(tot) {
    console.log(tot);
    function payString() {
        console.log(str)
    }
}

function payString(str) {
    console.log(str);
}
let result = buy_asis("고구마", 1000, 5, pay);
pay(result);