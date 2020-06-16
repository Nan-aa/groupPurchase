<template>
    <div class="main-page">
        <div class="login">
            <h2 class="page-title">修改密码</h2>
            <el-form label-width="100px" :model="data" :rules="rules" ref="main">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
                </el-form-item>
                <el-form-item label="重复输入密码" prop="repeat">
                    <el-input placeholder="重复输入密码" type="password" v-model="data.repeat"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="success" @click="submit">提交</el-button>
            <el-button type="success" @click="reset">重置</el-button>
        </div>
    </div>
</template>
<style scoped lang="scss">
</style>
<script>
import { username, password, repeat } from '@t/validator';
export default {
    data() {
        return {
            data: {},
            rules: {
                username: [{ trigger: 'blur', validator: username }],
                password: [{ trigger: 'blur', validator: password }],
                repeat: [{ trigger: 'blur', validator: (...args) => repeat(this.data.password, '密码', ...args)}]
            }
        }
    },
    
    methods: {
        submit() {
        	this.$refs.main.validate(valid => {
        		if (valid) {
        			this.$http.post('/admin/manager/update', {username:this.data.username,password:this.data.password})
        			.then(({data}) => {
        				if (data.errno === 0) {
        					return location.reload();
        				}
        				this.$message.error(data.msg)
        			})
        		}
        	})
        },
        reset() {
            this.$refs.main.resetFields();
        }
    }
}
</script>