// text영역
let textarea = document.querySelector('.textarea');

// 입력중인 문자 수
let string_num = document.querySelector('.string_num');

// 텍스트를 입력할 떄마다 KeyUp 이벤트를 실행
textarea.addEventListener('keyup', onKeyup);

function onKeyup(){
    const inputText = textarea.value;
    string_num.innerHTML = inputText.length;
}


// 성 입력란
const familyNameText = document.querySelector('#familyNameText');

// 이름 입력란
const firstNameText = document.querySelector('#firstNameText');

// 성+이름 출력할 위치 접근
const fullname = document.querySelector('#fullname');

// 문자가 입력될 때마다 onKeyUp 함수가 실행
firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);

// 문자가 입력될 때마다 실행되는 함수
function onKeyUp(){
    // 성
    const familyName = familyNameText.value;
    // 이름
    const firstName = firstNameText.value;

    // 출력위치
    fullname.innerHTML = familyName + " " + firstName;
}