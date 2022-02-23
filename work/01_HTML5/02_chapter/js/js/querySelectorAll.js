// 많이 쓰는 형태

window.onload = function(){
    let selecteditem = document.querySelectorAll("li.odd");
    for (let i = 0; i < selecteditem.length; i++){
        selecteditem.item(i).style.color = "red";
    }
}