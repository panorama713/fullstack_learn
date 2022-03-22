let myPic = document.querySelector('#pic');
        myPic.addEventListener("mouseover", function(){
            // 변경하고자 하는것의 불러오는 소스를 이용하면됨
            myPic.src = "../img/boy.png"; 
        })
        myPic.addEventListener("mouseout", function(){
            myPic.src = "../img/girl.png"; 
        })