window.onload = function(){
    // function같은 경우는 어디에 놔둬도 실행하지만
    // 그냥 지정하는건 그 위치에서만 실행됨. 즉 window.onload 해줘야 마지막에 실행함
    let smallPics = document.querySelectorAll(".small"); // 작은 사진

    for(let i=0; i<smallPics.length; i++){ // 이벤트 처리
        smallPics[i].addEventListener("click", changepic);
        // oneclick으로 하면 하나의 요소에 하나의 이벤트만 사용가능
        // smallPics[i].oneclick = chagepic;
    }
}
function changepic(){ // 사진 바뀌는 함수
    // let bigPic = document.querySelector("#cup"); // 큰 사진
    // let smallPicAttribute = this.getAttribute("src");
    // bigPic.setAttribute("src", smallPicAttribute);

    // 큰 사진 이미지 위치
    let cup = document.querySelector("#cup");
    // 작은 사진 이미지 위치
    let newPic = this.src;
    // 큰 이미지 위치 = 작은 이미지 위치
    cup.src = newPic
}

function showDetail(){
    document.querySelector('#detail').style.display = "block";
}
function hideDetail(){
    document.querySelector('#detail').style.display = "none";
}