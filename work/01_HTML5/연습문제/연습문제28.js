// 연습문제 28
// 주민등록번호는 생년월일과 성별정보, 지역정보로 이루어진다.
// 여기서 생년월일과 성별정보만 입력으로 받겠다
// 성별 정보는 1이면 1900년대 출생 남자, 2이면 1900년대 출생 여자, 
// 3이면 2000년대 출생 남자, 4이면 2000년대 출생 여자를 말한다.
// 기준년도는 2012년도 이다 현재 나이를 출력하세요
// 입력 : 생년월일(6자리)과 성별정보(1자리)가 공백으로 분리되어 정수로 주어진다.
// 출력 : 2012년도에 현재 나이를 출력하시오.
// 입력 예시 : 790101 1
// 출력 예시 : 34
window.onload = function(){
    let inp = prompt("생년월일과 성별정보를 입력해 주세요").split(" ");

    let 생년월일 = inp[0]; // 790101
    let 성별 = inp[1]; // 1

    let result = 0;

    if(성별 == "1" || 성별 == "2") {
        result = 2012 - Number("19" + 생년월일.substring(0,2)) + 1;  // 79
    }
    else{
        result = 2012 - Number("20" + 생년월일.substring(0,2)) + 1;
    }
    document.write(result);
}
