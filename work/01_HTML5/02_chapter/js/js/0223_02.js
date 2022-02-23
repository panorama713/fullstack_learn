// window.onload = function(){
//     let button = document.getElementById('button');
//     button.onclick = function(){
//         alert('click');
//     }
// }

window.onload = function(){
    document.getElementById('button').onclick = function(){
        this.textContent = this.textContent + '★';
    }
}

