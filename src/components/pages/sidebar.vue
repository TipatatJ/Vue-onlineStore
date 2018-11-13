<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center
            px-3 mt-4 mb-1 text-muted">
            <span>管理員</span>
            <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
            </a>
        </h6>
        <ul class="nav flex-column mb-2">
            <li class="nav-item mt-2">
            <router-link to='./products' >
                <span data-feather="file-text">產品列表</span>
            </router-link>
            </li>
            <li class="nav-item mt-2">
                <router-link to='./orders' >
                    <span data-feather="file-text">訂單列表</span>
                </router-link>
            </li>
            <li class="nav-item mt-2">
            <router-link to='./coupons' >
                <span data-feather="file-text">優惠券</span>
            </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default{

    }
</script>