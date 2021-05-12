import Vue from "vue";
import App from "./App.vue";
import store from "./veux/store";
import router from "./router/router";
import "material-design-icons-iconfont";

Vue.config.productionTip = false;

new Vue({ store, router, render: (h) => h(App) }).$mount("#app");
