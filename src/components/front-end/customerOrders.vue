<template>
    <div>
        <navbar></navbar>
        <h2 class="order-title">訂單資訊</h2>
        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" name="email" id="useremail" :class="{'is-invalid': errors.has('email')}"
                        v-model="form.user.email" placeholder="請輸入 Email"  v-validate="'required|email'">
                    <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
            
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                        v-model="form.user.name" placeholder="輸入姓名" v-validate="'required'" :class="{'is-invalid': errors.has('name')}">
                    <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                </div>
            
                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" name="tel" v-model="form.user.tel" placeholder="請輸入電話"  v-validate="'required'" :class="{'is-invalid': errors.has('tel')}">
                    <span class="text-danger" v-if="errors.has('tel')">電話欄位不得留空</span>
                </div>
            
                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="address" class="form-control" name="address" id="useraddress"  v-validate="'required'" v-model="form.user.address" :class="{'is-invalid': errors.has('address')}"
                        placeholder="請輸入地址">
                    <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                </div>
            
                <div class="form-group">
                    <label for="useraddress">留言</label>
                    <textarea name="" id="" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
        <app-footer></app-footer>
    </div>
</template>


<script>
import Navbar from './navbar.vue'
import Footer from './footer.vue'

    export default{
        components: {
            'navbar': Navbar,
            'app-footer': Footer
        },
        data(){
            return{
                form: {
                    user: {
                        name: '',
                        email: '',
                        tel: '',
                        address: '',
                    },
                    message: '',
                }
            }
        },
        methods:{
            createOrder(){
                const vm = this;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
                const order = vm.form;
                this.$validator.validate().then(result => {
                    if (result) {
                            this.$http.post(url,{data: order}).then((response) => {
                            console.log(vm.order)
                            console.log(response.data);
                            if (response.data.success){
                                vm.$router.push(`/payment/${response.data.orderId}`);                           
                            }
                        });
                    }else{
                        console.log('欄位不完整')
                    }
                });

            }
        },
    }
</script>

<style lang="sass" scoped>
.order-title
    text-align: center
.progress-check
    display: flex
    justify-content: center
    position: relative
    &:before
        content: ''
        width: 25%
        height: 1px
        background: #000
        position: absolute
        top: 50px
.checkCircle
    width: 100px
    height: 100px
    line-height: 100px
    text-align: center
    background: yellow
    border-radius: 50%
    position: relative
    margin: 0 25px
    z-index: 0
    &:before
        content: ''
        width: 80px
        height: 80px
        background: green
        border-radius: 50%
        position: absolute
        top: 10%
        left: 10px
        z-index: -1
</style>
