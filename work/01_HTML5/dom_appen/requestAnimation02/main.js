// 시, 분, 초
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

update();

// 현재시간을 표시하는 함수
function update(){
    const currentTime = new Date();
    // 현재시간 가져오기
    const hour = currentTime.getHours();
    hourElement.innerText = addZeroPadding(hour);
    // 현재 분 가져오기
    const minute = currentTime.getMinutes();
    minuteElement.innerText = addZeroPadding(minute);
    // 현재 초 가져오기
    const second = currentTime.getSeconds();
    secondElement.innerText = addZeroPadding(second);

    // 아래 함수에서 update를 계속 재실행 중
    requestAnimationFrame(update)
}

// 두자리 형식으로 숫자를 보여주는 함수 : 2 -> 02, 12 ->12
function addZeroPadding(num){
    return String(num).padStart(2, '0');
}