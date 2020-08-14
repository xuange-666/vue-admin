/*
 * @Author: your name
 * @Date: 2020-08-12 17:03:17
 * @LastEditTime: 2020-08-13 11:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscode代码pythonf:\笔记\vue\hand_and_hand\code\web1\vue-admin\vue-admin\src\router\index.js
 */
import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Login from "../views/Login/index.vue";

const routes = [{
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;