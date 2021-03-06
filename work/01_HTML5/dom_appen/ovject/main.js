// 변하지 않을 데이터는 const
// 객체는 중괄호로 시작
// 객체배열
const userList = [
    {id:1, name:'곰',address:'서울'},
    {id:2, name:'여우',address:'대전'},
    {id:3, name:'사자',address:'부산'}
];

// 컨테이너
const container = document.querySelector('.container');

userList.forEach((userData) => {
    // 각 요소 데이터를 화면에 출력
    container.innerHTML += `
    <div class="card">
        <h2>${userData.name}</h2>
        <p>지역:${userData.address}</p>
    </div>
    `;
});

// // 백틱 설명
// let num = 2;
// let dummy = `${num} 출력합니다`