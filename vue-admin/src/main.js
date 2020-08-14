/*
 * @Author: your name
 * @Date: 2020-08-12 17:03:17
 * @LastEditTime: 2020-08-14 08:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode代码pythonf:\笔记\vue\hand_and_hand\code\web1\vue-admin\vue-admin\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import ElementUI from "element-ui";
//import "element-ui/lib/theme-chalk/index.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

App.use(ElementUI);
new Vue({
  el: "#app",
  render: (h) => h(App),
});
