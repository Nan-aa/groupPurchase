
<script>
import Create from '@v/product/Create';
export default {
    mixins: [
        Create, {
            data() {
                return {
                    title:'编辑商品',
                    submitUrl: '/admin/product/update'
                }
            },
        }
    ],

    methods: {
        getData() {
            let { params } = this.$route;
            this.$http.get('/admin/product/detail', { params })
                .then(({ data }) => {
                    if (data.errno === 0) {
                        this.data = data.data;
                    } else {
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