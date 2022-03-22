// 회원 데이터
const userDataList = [
    {id:2, name:'곰'},
    {id:10, name:'여우'},
    {id:4, name:'사자'},
    {id:29, name:'기린'},
    {id:101, name:'호랑이'},
];

// 데이터를 목록태그를 이용하여 화면 출력 function
function updateList(){
    let listHtml = '';

    for(const data of userDataList){
        listHtml += `<li>${data.id} : ${data.name}</li>`;
    }
    document.querySelector('.user_list').innerHTML = listHtml;
}

// 오름차순 정렬 function
function sortByAscending(){
    userDataList.sort(function(a, b){
        return a.id - b.id;
    });
    // 오름차순 후 화면에 출력
    updateList();
};

// 내림차순 정렬 function
function sortByDescending(){
    userDataList.sort(function(a, b){
        return b.id - a.id;
    });
    // 내림차순 후 화면에 출력
    updateList();
};

// 오름차순 버튼
let ascending = document.querySelector(".ascending");
// 내림차순 버튼
let descending = document.querySelector(".descending");


ascending.addEventListener('click', ()=>{
    sortByAscending();
    updateList();
})
descending.addEventListener('click', ()=>{
    sortByDescending();
    updateList();
})

// 초기 화면 설정에는 오름차순으로 설정
sortByAscending();
updateList();