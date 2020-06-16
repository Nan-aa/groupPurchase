<template>
<div class="page-ads">
    <h1 class="page-title">{{title}}</h1>
    <el-form label-width="200px" :model="data" :rules="rules" ref="create">
    	<el-form-item label="用户名：" prop="username">
    		<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
    	</el-form-item>
    	<el-form-item label="密码：" prop="password">
    		<el-input placeholder="请输入密码" v-model="data.password"></el-input>
    	</el-form-item>
    	<el-form-item label="电话：" prop="phonenum">
    		<el-input placeholder="请输入电话号码" v-model="data.phonenum"></el-input>
    	</el-form-item>
    	<el-form-item label="性别：" prop="radio">
			<el-radio v-model="data.radio" label="female">男</el-radio>
			<el-radio v-model="data.radio" label="male">女</el-radio>    		
    	</el-form-item>
    	<el-form-item label="简介：" prop="descripe">
    		<el-input type="textarea" placeholder="请输入简介" v-model="data.descripe"></el-input>
    	</el-form-item>
    	<el-form-item>
    		<el-button type="success" @click="submit">提交</el-button>
    	</el-form-item>	
    </el-form>
</div>
</template>
<style lang="scss" scoped>
	
</style>
<script>
	import {username, password, phonenum} from "@t/validator";
	export default {
		data() {
			return {
				data:{
					
				},
				rules:{
					username:[{trigger:'blur',required:true,validator:username}],
					password:[{trigger:'blur',required:true,validator:password}],
					phonenum:[{trigger:'blur',required:true,validator:phonenum}],
					radio:[{trigger:'blur',required:true,message:'请选择一项'}],
					descripe:[{trigger:'blur',required:true,message:'请输入内容'}]

				},
				title: '创建用户',
				submitUrl: '/admin/user/createUser'
			}
		},
		methods: {
			submit() {
				this.$refs.create.validate(valid => {
					// console.log(valid);
					if (valid) {
						this.$http.post(this.submitUrl,  this.data)
						.then(({data}) => {
							if (data.errno === 0) {
								this.$message.success('提交成功');
								this.$router.replace('/user/list/1')
							}else{
								this.$message.error('请重试')
							}
						})
					}
				})
			}
		}
	}
</script>