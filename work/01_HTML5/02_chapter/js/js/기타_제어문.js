let lectures = ["html", 'css', 'javascript', 'php'];
var topic = 'javascript';
for(let i = 0; lectures.length; i++){
    // 배열은 0 부터 시작하기 때문에 i를 0으로 초기값을 잡아야함
    if(lectures[i] == topic){
        document.write(topic + '과목은' + (i + 1) + '번째 과목입니다.');
        break;
    }
}