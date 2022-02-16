window.onload = function () {
    var str = document.getElementById("text");
    str.innerHTML = "이 문장으로 바뀌었습니다!";
}
// 모두 하고 나서 자바스크립트를 실행한다는 의미임
// html문서를 메모리에 다 올리고 나서 js를 실행

// function changeText() {
//     let str = document.getElementById("text");
//     str.innerHTML = "<b>이 문장으로 바뀔까요?</b>";
// }

// function changeText(){
//     let x = 10, y = 20;
//     if(x == y) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x와 y는 같습니다.";
//     }
//     if( x < y) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x는 y보다 작습니다.";
//     }
//     if( x > y ) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x는 y보다 큽니다.";
//     }
// }

function changeText(){
    let x = 10, y = 20;
    if( x == y ) {
        let str = document.getElementById("text");
        str.innerHTML = "x는 y와 같습니다.";
    }else if( x < y ) {
        let str =document.getElementById("text");
        str.innerHTML = "x는 y보다 작습니다.";
    }else {
        let str = document.getElementById("text");
        str.innerHTML = "x보다 y가 큽니다.";
    }
}