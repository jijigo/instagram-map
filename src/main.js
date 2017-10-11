// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

const regex = /\access_token=(.*)/g;
const str = window.location.href;
let token;
let m;

let myStorage = window.localStorage;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    token = m[1];
    console.log(token);

    localStorage.setItem('token', token);

    router.push('profile');

    // window.location.href = "http://localhost:8081/profile";
}
