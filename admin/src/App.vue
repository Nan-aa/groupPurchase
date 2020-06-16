<template>
    <div id="app">
        <router-view v-if="$store.state.username"></router-view>
        <Login v-else></Login>
    </div>
</template>
<style lang="scss">
</style>
<script>
import Login from '@v/Login';
export default {
    components: {
        Login
    },
    // 创建完成
    created() {
        this.$store.dispatch('userinfo')
    }
}
</script>