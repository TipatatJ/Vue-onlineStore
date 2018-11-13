<template>
    <div>
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <sidebar></sidebar>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './pages/sidebar.vue';
import Navbar from './pages/navbar.vue';


export default{
    components:{
        'sidebar': Sidebar,
        'navbar': Navbar,
    },
    data(){
        return{

        }
    }
}

</script>