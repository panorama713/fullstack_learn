var arr = [1,2,3]; //배열 생성
delete arr[2]; // 배열의 원소 중 인덱스가 2인 요소를 삭제함
document.write(arr + "<br>");
// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정 된것은 아님
document.write(arr[2] + "<br>");
// 2는 없는 값이므로 undefined
document.write(arr.length);
// 배열의 갯수를 말함

<a href="javascript:void(0)"></a>;