// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY', // AIzaSyDa9_9zrBMcx0RI3vUfodOVIHCJe-iJn3c
    libraries: 'places',
  }
})

// TODO: 改成vue google map
// https://github.com/xkjyeah/vue-google-maps

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// 從url取得access_token
const regex = /\access_token=(.*)/g;
const str = window.location.href;
let match;
let myStorage = window.localStorage;

while ((match = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    localStorage.setItem('token', match[1]);   // token存入localStorage

    router.push('profile'); // 將頁面轉至profile.vue
}
