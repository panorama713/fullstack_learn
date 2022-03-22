window.onload = function(){
    // smallPics라는 행렬이 만들어짐
    let smallPics = document.querySelectorAll('.small')

    // 행렬을 가지고 이벤트를 만듦
    for(let i=0; i<smallPics.length; i++){
        // 어디에서 어떻게 이벤트가 일어날지 지켜볼것임
        smallPics[i].addEventListener('click', changepic)
    }
}
function changepic(){
    let cup = document.querySelector('#cup').innerHTML;
    // let newPic = this.src;
    // cup.src = newPic;
}

