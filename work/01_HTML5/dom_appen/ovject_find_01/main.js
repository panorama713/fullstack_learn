function searchUser(targetId){
    const userList = [
        {id:1, name:'사자'},
        {id:2, name:'곰'},
        {id:3, name:'여우'}
    ];

    // 해당 유저가 있는지 검색
    // 익명함수
    const targetUser = userList.find(function(user){
        return user.id === targetId;
    });

    // targetId 매개변수 값이 없는것이 들어오면 null처리
    if(targetUser === undefined){
        return null; // 아예 출력되지 않게 만드는거임
    }

    return targetUser.name;
};

// 화면 출력 : 유저가 있는 id로 이름을 출력 (id:1)
document.querySelector('#output').innerHTML = searchUser(1);
// 화면 출력 : 유저가 없는 id로 이름을 출력
document.querySelector('#output02').innerHTML = searchUser(4);