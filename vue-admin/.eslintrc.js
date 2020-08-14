/*
 * @Author: your name
 * @Date: 2020-08-12 17:03:17
 * @LastEditTime: 2020-08-13 10:29:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vscode代码pythonf:\笔记\vue\hand_and_hand\code\web1\vue-admin\vue-admin\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};