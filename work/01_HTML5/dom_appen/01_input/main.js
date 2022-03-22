const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

// .name-input 에 입력할 때마다 아래 이벤트가 실행

nameInput.addEventListener('input', ()=>{
    // 입력된 문자 가져오기
    const inputStr = nameInput.value;
    // 입력된 문자를 소문자로 변환
    const normalStr = inputStr.toLowerCase();

    // 입력 문자가 test 인지 아닌지 확인을 해보기
    if(normalStr.includes('test') == true){
        warningMessage.innerHTML = 'test 문자가 입력이 되었습니다'
    }else{
        warningMessage.innerHTML = ''
    }
})

// () => reuslt;