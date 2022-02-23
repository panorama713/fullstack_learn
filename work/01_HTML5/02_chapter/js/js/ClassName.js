window.onload = function(){
    let selecteditem = document.getElementsByClassName("odd");
    for (let i = 0; i < selecteditem.length; i++){
        selecteditem.item(i).style.color = "red";
    }
}