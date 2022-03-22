const wait = (inputStr, callback) => {
    // 비동기 프로그래밍 부분
    // 콜백을 이용한 부분
    setTimeout(() => {
        console.log(inputStr);
        callback();
    },1000);
}

// wait 함수 호출
// 1초 후에 실행되는 콜백함수들
//
wait('A', () => {
    wait('B', () => {
        wait('C', () => {
            return;
        });
    });
});


// Promise 바꾸기
const wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        // 비동기 부분 정의
        setTimeout(() => {
            console.log(inputStr);
        },1000);
    });
}

wait2("A")
    .then(() => wait2("B"))
    .then(() => wait2("C"))