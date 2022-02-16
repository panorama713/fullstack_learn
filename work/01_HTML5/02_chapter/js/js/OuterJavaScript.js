// 변수선언 = var
var x = true, y = false;
document.write((x && y) + "<br>"); //false 논리 and 연산
document.write((x || y) + "<br>"); //true 논리 or연산
document.write(!x + "<br>"); // false 논리 not연산

var radius = 10;
var pi = 3.141592
alert(2 * radius * pi);

// 기본연산자
var x = 10, y = 10;
document.write((++x - 3) + "<br>");
document.write((x + "<br>"));
document.write((y++ - 3) + "<br>");
document.write(y + "<br>");

// 비트연산자
var x = 15, y = 8, z = 15;
document.write((x << 1) + "<br>"); //곱하기 2와 같으므로 30
document.write((y >> 1) + "<br>"); // 나누기 2와 같으므로 4
document.write((~z) + "<br>"); // 1의 보수와 같으므로 ~ -16
document.write((x & 1) + "<br>");
document.write((x | 1) + "<br>");
document.write((x ^ 1) + "<br>");