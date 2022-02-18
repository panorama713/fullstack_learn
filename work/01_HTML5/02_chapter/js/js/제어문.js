let exceptNum = 3;

for(let i = 0; i <= 100; i++){
    if(i % exceptNum == 0)
    continue; // 특정 숫자를 제외하고 출력하고 싶을 때, 위의 숫자를 제외하고 출력함
    document.write(i + " ");
}