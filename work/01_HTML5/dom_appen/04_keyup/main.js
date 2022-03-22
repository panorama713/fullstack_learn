// 전화번호 입력란
const phoneNumberText = document.querySelector('#phoneNumberText');

// 경고 메세지 출력란
const warrningMessage = document.querySelector('#warrningMessage');

// 문자가 입력될 때마다 내용 체크
phoneNumberText.addEventListener('keyup',()=>{
    // 입력된 전화번호
    const phoneNumber = phoneNumberText.value;
    
    // 전화번호에 하이픈 제거
    const trimmedPhoneNumber = phoneNumber.replace(/-/g,""); // replace(/바꿀대상/g(g는 여러개), 바꿀내용)

    // 0으로 시작하는 10자리 혹은 11자리의 번호, 형식 체크
    // /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if(/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber)==false){
        warrningMessage.innerHTML = "전화번호의 형식에 맞춰 입력해 주세요";
    }else{
        warrningMessage.innerHTML = "";
    }
});