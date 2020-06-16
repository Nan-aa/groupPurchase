//引入vue
import Vue from 'vue';
//引入应用程序
import App from '@/App'
// 引入路由 
import router from '@/router';
//引入vuex
import store from '@/store';
//引入element-ui
import ElementUI from 'element-ui';
//引入样式
import 'element-ui/lib/theme-chalk/index.css';
//引入富文本
import VueQuillEditor from 'vue-quill-editor';
// 引入富文本样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
//引入发布请求的axios
import axios from 'axios';
//安装axios
Vue.prototype.$http = axios;
//安装elementui
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

//实例化
new Vue({
	//注册路由
	router,
	//注册store
	store,
	//渲染App
	render: h => h(App)
	//上树
}).$mount('#app');

