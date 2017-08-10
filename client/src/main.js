// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'

var config = {
  apiKey: 'AIzaSyDnelMfLWZGBNV9iqp86PDaxo0LyaYrKUk',
  authDomain: 'websocket-slide-59a42.firebaseapp.com',
  databaseURL: 'https://websocket-slide-59a42.firebaseio.com',
  projectId: 'websocket-slide-59a42',
  storageBucket: 'websocket-slide-59a42.appspot.com',
  messagingSenderId: '380553175163'
}
var firebaseApp = firebase.initializeApp(config)

Vue.use(VueFire)
Vue.config.productionTip = false
Vue.prototype.$firebaseDB = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
