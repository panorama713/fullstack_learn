Vue.component("child-component", {
    template:
    /*html*/
    `
        <div class="container">
            <p>childComponent입니다</p>
        </div>
    `
});

Vue.component("child-article", {
    template:
    /*html*/
    `
        <div class="article">
            Lorem ipsum dolor sit amet.
            <child-component> </child-component>
        </div>
    `
});

new Vue ({
    el: "#app"
})