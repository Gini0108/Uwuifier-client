import Vue from 'vue'
import App from './App.vue'

import "vue-code-highlight/themes/prism.css";
import "vue-code-highlight/themes/window.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
