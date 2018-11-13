// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import 'bootstrap'
// ----第三方套件----

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true ;
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);
// ---啟用第三方套件---

import Vue from 'vue'
import App from './App'
import router from './router'
import currencyFilter from './filters/currency'


Vue.config.productionTip = false;
Vue.filter('currency',currencyFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((res) =>{
      if  (res.data.success){
        next();
      }else{
        next({
          path: '/login',
        })
      }
    })
  }else{
    next();
  }
});