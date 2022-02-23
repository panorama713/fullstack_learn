window.onload = function(){
    let selecteditem = document.getElementsByName("first");
    for (let i = 0; i < selecteditem.length; i++){
        selecteditem.item(i).style.color = 'red';
    }
}