<template>
    <div>
        <navbar></navbar>
        <store></store>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar from './front-end/navbar.vue'
import Store from './front-end/store.vue'
import Footer from './front-end/footer.vue'

    export default {
        components: {
            'navbar': Navbar,
            'store': Store,
            'app-footer':Footer
        }
    }
</script>


<style lang="sass" scoped>

</style>
