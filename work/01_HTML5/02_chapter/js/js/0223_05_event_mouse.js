let myPic = document.querySelector('#pic');
        myPic.addEventListener("mouseover", function(){
            myPic.src = "../img/boy.png"; 
        })
        myPic.addEventListener("mouseout", function(){
            myPic.src = "../img/girl.png"; 
        })