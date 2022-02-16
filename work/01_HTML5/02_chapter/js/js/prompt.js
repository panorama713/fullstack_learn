// HTML 문서가 완전히 메모리에 올라오고 나서 아래 소스가 실행됨
window.onload = function () {
    let name = prompt("이름을 입력하세요");
    document.write(name + "님 환영합니다.");
}