window.onload = function(){
    //현재시각 보이기

    setInterval(displayNow, 1000);

    function displayNow(){
        let now = new Date();

        let currentTime = now.toLocalTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }
}

function checkAll(){
    // 테이블 완료 체크시 전체 완료 수정
    let chkAll = document.querySelector('#chkAll');
    let tableComplain = document.querySelector('#tableComplain');

    // 체크박스의 상태가 체크일때
    if(chkAll.checked == true) {
        for(let i=1; i<tableComplain.rows.length; i++){
            tableComplain.rows[i].cells[5].innerHTML = '완료';
        }
    }else{
        for(let i=1; i<tableComplain.rows.length; i++){
            tableComplain.rows[i].cells[5].innerHTML = '미완료';
        }
    }
}
