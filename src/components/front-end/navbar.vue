<template>
        <header>
            <div class="container">
                <nav id="nav">
                    <ul class="row nav-ul">
                        <li class="nav-li"><router-link to="/index"><img src="../../assets/logo.png" id="logo" alt=""></router-link></li>
                        <li class="nav-li"><router-link to="/login">後台管理(需驗證)</router-link></li>
                    </ul>
                </nav>
            </div>    
        </header>
</template>

<style lang="sass" scoped>
#logo
    width: 120px
    height: 120px

.nav-ul
    justify-content: space-between
.nav-li
    height: 120px
    line-height: 120px
    font-size: 16px
    a
        color: #000
        &:hover
            color: #d6b161
</style>
