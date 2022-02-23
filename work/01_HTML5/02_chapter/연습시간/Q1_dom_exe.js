// // 문제1
// // 입력한 숫자가 홀수이면 image1.pngfmf 보여주고, 짝수이면 image2.pngfmf 화면에 보여주세요
// // 출력 : div태그를 만드셔서 id="result" 영역에 출력해주세요

// window.onload = function(){
//     let n = Number(prompt('숫자를 입력해 주세요'));
//     let contents = "";


//     if(n % 2 == 1){
//         // contents변수를 지정해줌
//         contents = "<img src = '../js/img/image1.png'>";
//     }else{
//         contents = "<img src='../js/img/image2.png'>";
//     }
//     // innerHTML로 output에 contents를 집어넣음
//     document.getElementById('output').innerHTML = contents;
// }

// // 문제2
// // 홀수이면 image1.png를 보여주고, 짝수이면 image2.png를 화면에 출력할때
// // 반복문을 사용해서 총 6번 이미지를 보여주세요
// // 출력 : image1.png image2.png image1.png image2.png image1.png image2.png

// window.onload = function(){
//     let n = 6;
//     let contents = "";

//     for(let i = 1; i <= n; i++){
//         if(i % 2 == 1){
//             // contents변수를 지정해줌
//             // 테그도 더해서 쌓을 수 있음
//             contents += "<img src = '../js/img/image1.png'>";
//         }else{
//             contents += "<img src='../js/img/image2.png'>";
//         }
//         // innerHTML로 output에 contents를 집어넣음
//         document.getElementById('output').innerHTML = contents;
//     }
// }



// // 문제3
// // 반복문을 사용해서 동적테이블을 생성하는 프로그램을 작성해 주세요
// // 번호      제목       일자
// // 1     안녕하세요    12-07
// // 2     안녕하세요    12-07
// // 3     안녕하세요    12-07
// // 4     안녕하세요    12-07

// window.onload = function(){
//     let n = Number(prompt('테이블의 행수를 입력하세요.'));
//     let contents = "";
    
//     contents += "<table border='1'>"
//     contents += "<tr><th>번호</th><th>제목</th><th>일자</th></tr>"
//     for(let i = 1; i <= n; i++){
        
//         contents += "<tr><td>" + i + "</td>" + "<td>안녕하세요</td><td>12-07</td></tr>";
//     }
//     contents +="</table>";
//     document.getElementById("result").innerHTML = contents;
// }

// // 문제4
// // 구구단 만들기

// window.onload = function(){
//     let n = Number(prompt('단수를 입력하세요'));
//     let contents = "";

//     contents += "<table border>";
//     contents += "<tr><th>" + n + "단</th></tr>";
//     for(let i = 1; i < 10; i++){
//         contents +="<tr><td>" + n + "</td>" + "<td>*</td>" + "<td>" + i + "</td>" + "<td>" + "=" + "</td>" + "<td>" + n*i; + "</td></tr>"
//     }
//     contents +="</table>";
//     document.getElementById("result").innerHTML = contents;
// }

function 구구단(){
    let contents = "";

    contents += "<table>";
    
    // 단수 반복
    contents += "<tr>"
    for(i = 2; i < 10; i++){
        contents += "<th>"+ i +"단</th>";
    }contents += "</tr>"

    // 내용 반복
    for(let n = 2; n <=9; n++){
        contents +="<tr>"
        for(let i = 2; i < 10; i++){
            contents +="<td>" + i + "x" + n + "=" + (n*i) + "</td>"
        }contents += "</tr>"
    }
    contents +="</table>";
    document.getElementById("result").innerHTML = contents;
}