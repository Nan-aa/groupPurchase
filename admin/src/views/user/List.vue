<template>
<div class="page-list">
    <h1 class="page-title">用户列表</h1>
    <el-table :data="data" style="100%" @row-click="update">
    	<el-table-column label="用户ID" prop="id"></el-table-column>
    	<el-table-column label="用户名" prop="username"></el-table-column>
    	<el-table-column label="性别" prop="sex"></el-table-column>
    	<el-table-column label="密码" prop="password"></el-table-column>
    	<el-table-column label="电话" prop="phone"></el-table-column>
    	<el-table-column label="简介" prop="descripe"></el-table-column>
    </el-table>
    <div class="btns">
    	<router-link class="is-round" tag="el-button" :to="'/user/list/' + ($route.params.page > 1 ? $route.params.page - 1 : 1)" round>上一页</router-link>
    	<router-link class="is-round" tag="el-button" :to="'/user/list/' + (+$route.params.page + 1) " round>下一页</router-link>
    </div>
</div>
</template>
<style scoped lang="scss">
	.btns{
		margin-top:20px;
		text-align: center;
	}
</style>
<script>
	export default {
		data() {
			return {
				data:[]
			}
		},
		methods: {
			getData() {
				let { params } = this.$route;
				this.$http.get('/admin/user/userlist', { params })
				.then(({data}) => {
					if (data.errno == 0) {
						console.log(data.data);
						return this.data = data.data
					}else{
						this.$message.error('获取用户列表错误')
						this.data = [];
					}
				})
			},
			//行跳转
			update(row) {
				//获取当前行信息 id值
				// console.log(row.id)
				this.$router.push('/user/edit/' + row.id);
			}
		},
		watch: {
			$route() {
				this.getData();
			}
		},
		created() {
			this.getData();
		}
	}
</script>