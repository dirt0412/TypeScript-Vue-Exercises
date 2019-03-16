import Vue from "vue";
import Calc1Component from "./components/Calc1.vue";
import Calc2Component from "./components/Calc2.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <h1>Calc1 Component</h1>
        <calc1-component :name="name"  />
        <h1>Calc2 Component</h1>
        <calc2-component :name="name"  />
    </div>
    `,
    data: { name: "Test" },
    components: {
        Calc1Component,
        Calc2Component
    }
});
