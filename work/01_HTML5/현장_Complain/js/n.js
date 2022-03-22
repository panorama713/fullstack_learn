function n(){
    let loginId = document.querySelector('#userid');
    let loginpwd1 = document.querySelector('#pwd1');
    let loginpwd2 = document.querySelector('#pwd2');

    if(loginId.value == ""){
        return false;
    }else if(loginpwd1.value == loginpwd2.value){
        return false;
    }alert('환영합니다')
    
}