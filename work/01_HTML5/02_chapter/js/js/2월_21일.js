// window.onload = function(){
//     let str = document.getElementById("text");
//     str.innerHTML = "이 문장으로 바뀌었습니다!";
// }

// window.onload = function(){
//     let title = document.title;
//     document.write(title);
// }


// window.onload = function(){
//     function changeLink(){
//         let link = document.getElementById("link");
//         link.href = "http://tcpshool.com/javascript/intro";
//         link.innerHTML = "자바스크립트 수업 바로가기";
//     }
// }

// window.onload = function(){
    

// }
// // 웬만하면 function 내부에는 function넣지말자. 회색표시나면 동작을 안한다는 의미임
// function changeRedColor(){
//     var str = document.getElementById("text");
//     str.style.color = "red";
// }
// function changeBlackColor(){
//     var str = document.getElementById("text");
//     str.style.color = "black";
// }

// // 책 342~

// // 이벤트를 연결합니다
// window.onload = function(){
//     // 문서 객체를 선택합니다
//     let headers = document.querySelectorAll('h1');

//     for(let i = 0; i < headers.length; i++){
//     // 변수를 선언합니다
//         let header = headers[i];

//     // 문서 객체를 조작합니다
//     header.style.color = 'orange';
//     header.style.background = 'red';
//     header.innerHTML = "From JavaScript";
//     }
// };

window.onload = function(){
    let output = '';
    for(let i = 0; i < 10; i++){
        output += '<h1>header - ' + i + '</h1>';
    }

    // // 문서 객체 내부의 글자를 변경합니다
    // document.body.textContent = output;
    document.body.innerHTML = output;
}

let header = document.getElementById('header');
header.style.backgroundColor = 'red';