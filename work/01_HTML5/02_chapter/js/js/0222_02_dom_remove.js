function removeCh(){
    // 부모태그
    let outputId = document.getElementById('outputId');
    // 자식태그
    let pTag = document.getElementById('removeChId');
    // 삭제
    outputId.removeChild(pTag);
}

function removeTag(){
    // 태그 id 접근
    let removeId = document.getElementById('removeId');
    // 태그 삭제
    removeId.remove();
}