function func_prompt(){
    // id가 forbob일때 로그인 성공
    if(prompt('id를 입력해 주세요') == 'forbob'){
        alert("login 성공");
    }else{
        alert("login 실패");
    }
}