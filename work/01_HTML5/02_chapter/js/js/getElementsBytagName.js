window.onload = function(){
    let selecteditem = document.getElementsByTagName('li');
    for (let i = 0; i < selecteditem.length; i++){
    selecteditem.item(i).style.color = "red";
    }
}