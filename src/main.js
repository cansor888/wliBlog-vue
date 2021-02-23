import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import './assets/css/admin.css'
import 'element-ui/lib/theme-chalk/index.css'
import utils from './utils'


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
VMdPreview.use(githubTheme)
Vue.use(VMdPreview);

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.utils = utils

Vue.directive('title',{
  update(dom){
    document.title = dom.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
