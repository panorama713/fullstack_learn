// // 연습문제 #1
// // 콜백함수를 Promise로 고쳐보세요

// // const wait = (inputStr, callback) => {
// //     setTimeout(() => {
// //         console.log(inputStr);
// //         callback();
// //     },1000);
// // };

// // wait("B", () => {
// //     wait("C", () =>{
// //         return;
// //     });
// // })

// let promise =  new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("B")
//         resolve();
//     }, 1000);
// });
// promise.then(function() {
//     console.log("C");
// })


// // 연습문제 #2
// // 1초후에 실행되는 promise
// // then 실행을 해서 아래처럼 출력해주세요
// // 출력 : "안녕하세요 강태경 님!"
// let promise = new Promise(function(resolve,reject){
//     // 1초 후에 실행
//     setTimeout(() => {
//         let name = prompt("이름을 입력하십시오");
//         resolve(name);
//     }, 1000);
// });

// promise.then(function(name){
//     console.log("안녕하세요 " + name + " 님!")
// });


// // 연습문제 #3
// // Promise정의가 있음
// // 아래를 보고 promise 함수를 호출해서 출력해 보세요
// let promise = new Promise(function(resolve, reject) {
//     let n = Number(prompt("10 미만의 숫자를 입력하십시오."));
//     // 1초후 실행
//     setTimeout(function() {
//         if( n <= 10 ) {
//             resolve(n);
//         } else {
//             reject(`오류 : ${n}(은)는 10 이상 숫자 입니다`);
//         }
//     },1000);
// });

// // promise를 호출하는 부분을 작성해 보세요
// // 성공 : 10 미만의 숫자를 입력하셨습니다.

// // promise.then(function(num) {
// //     console.log("10 미만의 숫자를 입력하셨습니다.")
// // },function(err){
// //     console.log(err)
// // })

// // 성공하면 then 실패하면 .catch

// promise
//     .then(function(num) {
//     console.log("10 미만의 숫자를 입력하셨습니다.")
//     })
//     .catch(function(err) {
//         console.log(err);
//     });


// 연습문제 #4
// 비동기로 동작하는 펑션 정의
function buyAsync(mymoney) {
    return new Promise(function(resolve, reject){
        let payment = Number(prompt("지불하고자 하는 금액을 입력 하십시오"));
        // 비동기로 동작하는 함수 정의
        // 1초후에 실행
        setTimeout(function(){
            // 잔액 계산
            let balance = mymoney - payment;
            if(balance > 0) {
                // 성공
                console.log(`${payment}원을 지불하셨습니다`);
                resolve(balance);
            }else{
                // 실패
                reject(`잔액은 ${mymoney}원 입니다. 구매할 수 없습니다.`)
            }
        },1000);
    });
}

buyAsync(500)
    .then(function(balance){
        console.log(`잔액은 ${balance}원 남았습니다.`)
    })
    .catch(function(err){
        console.log(err);
    });