setInterval(displayNow, 1000); // 1초마다 displayNow함수를 실행

        function displayNow(){
            // 현재 시간 불러오는 클래스
            let now = new Date();
            // 현재 대한민국에서 쓰는 시간을 저장
            let currentTime = now.toLocaleTimeString();
            document.querySelector('#displayNow').innerHTML = currentTime;
        }