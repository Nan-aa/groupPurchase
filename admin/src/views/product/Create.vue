<template>
    <div class="create">
        <h1 class="page-title">{{title}}</h1>
        <el-form label-width="200px" :model="data" :rules="rules" ref="product">
            <el-form-item label="商品名称" prop="title">
                <el-input placeholder="请输入商品名称" v-model="data.title"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
                <el-input type="textarea" placeholder="请输入商品描述" v-model="data.description"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-input type="number" placeholder="请输入商品价格" v-model="data.price"></el-input>
            </el-form-item>
            <el-form-item label="商品原价" prop="originPrice">
                <el-input type="number" placeholder="请输入商品原价" v-model="data.originPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品评分" prop="evaluate">
                <el-rate allow-half show-score v-model="data.evaluate"></el-rate>
            </el-form-item>
            <el-form-item label="商品分类" prop="type">
                <el-select placeholder="请输入商品分类" v-model="data.type">
                    <el-option v-for="item in types" :key="item.id" :label="item.text" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品销量" prop="sales">
                <el-input type="number" placeholder="请输入商品销量" v-model="data.sales"></el-input>
            </el-form-item>
            <el-form-item label="商品店名" prop="storeName">
                <el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
            </el-form-item>
            <el-form-item label="商品地址" prop="storeAddress">
                <el-input placeholder="请输入商品地址" v-model="data.storeAddress"></el-input>
            </el-form-item>
            <el-form-item label="商品分店" prop="storeNum">
                <el-input type="number" placeholder="请输入商品分店" v-model="data.storeNum"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="img">
                <el-upload action="/admin/product/upload" :on-success="uploadSuccess" :on-error="uploadFail" :show-file-list="false">
                    <el-button type="primary">上传</el-button>
                    <span slot="tip" class="upload-text-tip">请选择商品图片</span>
                </el-upload>
                <img v-show="data.img" class="upload-img" :src="data.img" alt="">
            </el-form-item>
            <el-form-item label="商品内容" prop="content">
                <quill-editor v-model="data.content"></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitData">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="scss">
</style>
<script>
import { types } from '@t/conf'
export default {
    data() {
    	let rules = {};
    	["img", "title", "description", "sales", "price", "originPrice", "type", "evaluate", "storeName", "storeAddress", "storeNum", "content"].forEach(item => rules[item] = [{trigger:'blur', required: true, message:'请输入内容'}])
        return {
            data: {},
            types,
            rules,
            title: '创建商品',
            submitUrl: '/admin/product/create'
        }
    },
    computed: {
    	dealData() {
    		// 转换数字
            ["sales", "price", "originPrice", "type", "evaluate", "storeNum"].forEach(key => this.data[key] = +this.data[key]);
            return this.data;
    	}
    },
    methods: {
    	uploadSuccess({errno, data, msg}) {
    		// console.log(args);
    		// console.log(errno, data, msg)
    		if (errno === 0) {
    			this.$set(this.data, 'img', data)
    		}else{
    			this.$message.error(msg)
    		}
    	},
    	uploadFail() {
    		// console.log(args);
    		this.$message.error('上传失败')
    	},
    	submitData() {
    		this.$refs.product.validate(valid => {
    			if (valid) {
    				this.$http.post(this.submitUrl, this.dealData)
    				.then(({data}) => {
    					if (data.errno === 0) {
    						this.$message.success('创建成功');
    						this.$router.replace('/product/list/1')
    					}else{
    						this.$message.error(data.msg)
    					}
    				})
    			}
    		})
    	}
    }
}
</script>