<template>
    <div class="product-list">
        <h2 class="page-title">商品列表</h2>
        <div class="card">
            <el-card v-for="item in data" :key="item._id">
                <img :src="item.img" alt="">
                <h3>{{item.title}}</h3>
                <p class="price-part">
                    <span class="price">￥{{item.price}}</span>
                    <span class="type">{{item.type | type}}</span>
                </p>
                <p class="sales">销售:{{item.sales}}</p>
                <div class="btn">
                    <router-link tag="el-button" :to="'/product/edit/' + item._id" size="small" type="success" class="el-button--success el-button--mini">
                        修改
                    </router-link>
                    <el-button size="mini" type="danger" @click="deleteItem(item._id, item.title)">删除</el-button>
                </div>
            </el-card>
        </div>
        <div class="btns">
            <router-link class="is-round" tag="el-button" :to="'/product/list/' + ($route.params.page > 1 ? $route.params.page - 1 : 1)" round>上一页</router-link>
            <router-link tag="el-button" :to="'/product/list/' + (+$route.params.page + 1)" round class="is-round">下一页</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.product-list {
    .card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 280px;
            margin-bottom: 25px;

            img {
                width: 240px;
                height: 135px;
            }

            h3 {
                text-align: center;
                font-size: 20px;
                font-weight: normal;
                margin: 20px 0 6px;
            }

            .price-part {
                display: flex;
            }

            .price {
                flex: 1;
                color: #f30;
                font-size: 18px;
            }
        }
    }

    .btns {
        padding: 40px 0 50px;
        text-align: center;
    }
}
</style>
<script>
import { types } from '@t/conf';
export default {
	filters: {
		type(id) {
			let data = types.find(item => item.id == id);
			return data ? data.text : '其他'
		}
	},
    data() {
        return {
            data: [],
            types
        }
    },
    methods: {
        getData() {
            let { params } = this.$route;
            this.$http.get('/admin/product/list', { params })
                .then(({ data }) => {
                    if (data.errno === 0) {
                        console.log(data.data)
                        return this.data = data.data;
                    }
                    this.$message.error(data.msg);
                    this.data = [];
                })
        },
        deleteItem(id, title) {
        	this.$confirm('确定删除此商品？')
        	.then((...args) => {
        		// console.log(args);
        		this.$http.post('/admin/product/remove', {id})
        		.then(({data}) => {
        			if (data.errno === 0) {
        				this.$message.success('删除成功');
        				location.reload();
        			}else{
        				this.$message.error(data.msg)
        				this.data = []
        			}
        		})
        		.catch(() => {})
        	})
        }
        

    },
    created() {
        this.getData();
    },
    watch: {
        $route() {
            this.getData();
        }
    }
}
</script>