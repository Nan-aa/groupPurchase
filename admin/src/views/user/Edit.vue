<script>
import Create from '@v/user/Create';
export default {
    mixins: [
        Create,
        {
            data() {
                return {
                	data:{},
                    title: '编辑商品',
                    submitUrl: '/admin/user/updateUserInfo'
                }
            }
        }
    ],
    methods: {
    	getData(){
    		let { params } = this.$route;
    		this.$http.get('/admin/user/detail', { params })
    		.then(({data}) => {
    			if (data.errno === 0) {
    				// console.log(data.data)
    				this.data = data.data;
    			}else{
    				this.$message.error(data.msg);
    				this.$router.back();
    			}
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