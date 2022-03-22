setInterval(() => {
    // 현재시간
    const now = new Date();

    // 시간을 단위로 추출
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // 시침의 각도 (시점은 시와 함께 분의 각도도 고려한다)
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    // 분침의 각도
    const degM = m * (360 / 60);
    // 초침의 각도
    const degS = s * (360 / 60);

    // 시간, 분, 초침 위치
    const elementH = document.querySelector('.lineHour');
    const elementM = document.querySelector('.lineMin');
    const elementS = document.querySelector('.lineSec');

    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
}, 50);