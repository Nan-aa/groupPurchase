//引入vue
import Vue from 'vue';
//引入vuex 解构store
import Vuex, { Store } from 'vuex';

import axios from 'axios';
import { Message } from 'element-ui';


//安装
Vue.use(Vuex);

//实例化暴露接口
export default new Store({
	state:{
		username: ''
	},
	mutations:{
		updateUsername(state, value){
			state.username = value;
		}
	},
	actions:{
		login(store, value){
			axios.post('/admin/login', value)
			.then(({data}) => {
				if (data.errno === 0) {
					store.commit('updateUsername', data.data)
				}else{
					Message.error(data.msg)
				}
			})
		},
		userinfo(store) {
			axios.get('/admin/userinfo')
			.then(({data}) => {
				if (data.errno === 0) {
					store.commit('updateUsername', data.data)
				}
			})
		}
	}
})