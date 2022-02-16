// let x = 10, y = 20;
// if(x == y) {
//     document.write("x는 y와 같습니다.");
// }
// if(x < y) {
//     document.write("x는 y보다 작습니다.");
// }
// if(x > y) {
//     document.write("x는 y보다 큽니다.");
// }

window.onload = function () {
    let str = document.getElementById("text"); // 가지겠다 요소의 아이디를
    str.innerHTML = "바뀔 문장 입니다.";
}

// function changeText(){
//     let x = 10, y = 20;
//     if( x == y ) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x는 y와 같습니다.";
//     }else if( x < y ) {
//         let str =document.getElementById("text");
//         str.innerHTML = "x는 y보다 작습니다.";
//     }else {
//         let str = document.getElementById("text");
//         str.innerHTML = "x보다 y가 큽니다.";
//     }
// }

// function changeText(){
//     let x = 3, y = 3;
//     if( x < y ) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x는 y보다 작습니다.";
//     }else if( x == y ) {
//         let str = document.getElementById("text");
//         str.innerHTML = "x는 y와 같습니다.";
//     }
// }

function changeText(){
    let date = new Date();
    let month = date.getMonth() + 1 ;

    if( 3 <= month && month <= 5) {
        let str = document.getElementById("text");
        str.innerHTML = "봄입니다.";
    }else if( 6<= month && month <= 8){
        let str = document.getElementById("text");
        str.innerHTML = "여름입니다.";
    }else if( 9<= month && month <= 11){
        let str = document.getElementById("text");
        str.innerHTML = "가을입니다.";
    }else{
        let str = document.getElementById("text");
        str.innerHTML = "겨울입니다.";
    }
}

function changeText(){
    
}