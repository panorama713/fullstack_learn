Vue.component("my-header", {
    template: 
    /*html*/
    `
    <header id="main-header">
            <hgroup>
                <h1 class="master-title">다양한 정보 소개 사이트</h1>
                <h2 class="master-description">잡학사전</h2>
            </hgroup>
        </header>
    `
});

// Vue 생성
new Vue ({
    el: `#page-wrapper`
});