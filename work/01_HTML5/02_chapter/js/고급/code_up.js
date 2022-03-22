function 판정(x, y){

        let result = " ";
    

    // 첫번째 정수 판정
    if(x % 2 == 1 ) {
        result = "홀수+";
    }else{
        result = "짝수+";
    }

    // 두번째 정수 판정
    if(y % 2 == 1) {
        result = result + "홀수="
    }else{
        result += "짝수=";
    }


        if(((x + y) % 2) == 1) {
            result = result + "홀수";
        }else{
            result += "짝수";
        }

        return result;
}

let inp = prompt("숫자 2개를 입력해 주세요").split(" ").map(Number);

// 화면출력
document.write(판정(inp[0], inp[1]));