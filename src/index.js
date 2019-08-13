import Vue from "vue";
import App from "./App.vue";

import { firestorePlugin } from "vuefire";

// import Button from "material-components-vue/dist/button";
// Vue.use(Button);

Vue.use(firestorePlugin);

const appElement = document.createElement("div");
appElement.id = "app";

document.body.appendChild(appElement);

import "./main.css";
import "./main.scss";

new Vue({
  el: appElement,
  render: h => h(App),
});
