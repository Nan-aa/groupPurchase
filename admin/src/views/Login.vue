<template>
	<div class="login-page">
		<div class="login">
			<h2>请登录</h2>
			<el-form label-width="100px" :model="data" :rules="rules" ref="login">
				<el-form-item label="用户名" prop="username">
					<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
				</el-form-item>
			</el-form>
			<el-button type="success" @click="submit">登陆</el-button>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.login-page{
		position: fixed;
		left: 0;
		top:0;
		right: 0;
		bottom:0;
		background: #efefef;
		.login{
			position: absolute;
			width: 400px;
			padding:20px;
			top:50%;
			left:50%;
			margin:-150px -220px;
			border-radius: 15px;
			background: #fff;
			h2{
				border-bottom:1px solid lightgreen;
				padding:5px 0 15px;
				text-align: center;
				margin:0;
            	margin-bottom: 20px;

			}
			.el-button{
				width: 100%;
			}
		}
	}
</style>
<script>
	import { username, password } from '@t/validator';
	export default {
		data() {
			return {
				data: {},
				rules: {
					username: [{trigger: 'blur', validator: username}],
					password: [{trigger: 'blur', validator: password}],
				}
			}
		},
		methods: {
			submit() {
				// console.log(this.$refs.login);
				this.$refs.login.validate(valid => valid && this.$store.dispatch('login', this.data))

			}
		}
	}
</script>	