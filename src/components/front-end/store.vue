<template>
    <div>
        <div class="banner">
            <div class="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="slide-box d-flex">
                                <img class="d-block  slide-img" src="../../assets/img/海馬.jpg" alt="">
                                <img class="d-block  slide-img" src="../../assets/img/遊戲.jpg" alt="">
                                <img class="d-block  slide-img" src="../../assets/img/城之內.jpg" alt="">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="slide-box d-flex">
                                <img class="d-block slide-img" src="../../assets/img/黑魔島.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/遊戲4.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/黑魔島女孩.jpg" alt="">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="slide-box d-flex">
                                <img class="d-block slide-img" src="../../assets/img/佐助.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/鳴人.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/小櫻.jpg" alt="">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="slide-box d-flex">
                                <img class="d-block slide-img" src="../../assets/img/孫悟空2.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/達爾特.jpg" alt="">
                                <img class="d-block slide-img" src="../../assets/img/達爾.jpg" alt="">
                            </div>
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

        <section class="inventory py-5" id="inventory">
            <div class="container">

                <div class="row">
                    <div class="col-4">
                        <div class=" mx-auto col-md-12 d-flex flex-column btn-list">
                            <li class="btn btn-outline-secondary text-uppercase mx-1" @click="filterProduct">all</li>
                            <li class="btn btn-outline-secondary text-uppercase mx-1" @click="filterProduct" >七龍珠</li>
                            <li class="btn btn-outline-secondary text-uppercase mx-1" @click="filterProduct" >火影</li>
                            <li class="btn btn-outline-secondary text-uppercase mx-1" @click="filterProduct" >遊戲王</li>
                        </div>
                    </div>

                    <div class="row inventory-container col-8">
                        <div class=" mx-auto col-md-6 col-lg-6"  v-for="product in products" :key="product.id">
                            <div class="card car-card">
                                <div class="card-img" style="width:100%; height: 450px; background-size: contain; background-position: center; background-repeat: no-repeat" :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
                                <!-- card body -->
                                <div class="card-body">
                                    <div class="car-info d-flex flex-column">
                                        <!-- first flex child -->
                                        <div class="car-text text-uppercase">
                                            <h6 class="product-category py-2 px-3">{{product.category}}</h6>
                                            <h4 class="font-weight-bold">{{product.title}}</h4>
                                            
                                        </div>
                                        <!-- second flex child -->
                                        <div class="product-price">
                                            <del class="text-secondary font-weight-bold">NT$ {{product.origin_price}}</del>
                                            <h4 class="font-weight-bold text-success">NT$ {{product.price}}</h4>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer d-flex">
                                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(product)">
                                        查看更多
                                    </button>
                                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(product.id)">
                                        加到購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="pagination-box" v-if="show">
                    <ul class="pagination">
                        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
                            <a href="#" class="page-link" aria-label="Previous" @click.prevent="getProducts(pagination.current_page - 1)">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active': pagination.current_page === page}"><a class="page-link" href="#" @click.prevent="getProducts(page)">
                        {{page}}</a></li>
                        <li class="page-item" :class="{'disabled': !pagination.has_next}">
                        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pagination.current_page + 1)">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
        

        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ item.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="item.imageUrl" class="img-fluid" alt="">
                        <blockquote class="blockquote mt-3">
                        <p class="mb-0">{{ item.content }}</p>
                        <footer class="blockquote-footer text-right">{{ item.description }}</footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h4" v-if="!item.price">{{ item.origin_price }} 元</div>
                        <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                        <div class="h4" v-if="item.price">現在只要 {{ item.price }} 元</div>
                        </div>
                        <select name="" class="form-control mt-3" v-model="item.num">
                        <option :value="num" v-for="num in 10" :key="num">
                            選購 {{num}} {{item.unit}}
                        </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                        小計 <strong>{{item.num * item.price}}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary" @click="addToCart(item.id,item.num)">
                        加到購物車
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="cart-thumbnail">
            <div class="shopping-cart" @click="openCart">
                <div class="cart-num">{{cart.carts.length}}</div>
                <i class="fas fa-shopping-cart"></i>
            </div>

            <div class="cart-list">
                <table class="table">
                    <thead>
                        <th></th>
                        <th>商品</th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>

                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                            <td class="align-middle">
                                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                                <i class="far fa-trash-alt"></i>
                                </button>
                            </td>
                            <td class="align-middle">
                                <img :src="item.product.imageUrl" alt="" class="cart-item-img">
                            </td>
                            <td class="align-middle">
                                {{ item.product.title }}
                                <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                                </div>
                            </td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">NT${{ item.final_total }}</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td class="text-right">NT${{ cart.total }}</td>
                        </tr>

                        <tr v-if="cart.final_total !== cart.total">
                            <td colspan="3" class="text-right text-success">折扣價(50%)</td>
                            <td class="text-right text-success">NT${{ cart.final_total }}</td>
                        </tr>

                    </tfoot>
                </table>

                <div class="input-group mb-3 input-group-sm">
                    <input type="text" class="form-control" placeholder="請輸入優惠碼 => 6666" v-model="coupon_code">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                        套用優惠碼
                        </button>
                    </div>
                </div>
                
                <div class="text-center">
                    <router-link to="/order">結帳去</router-link>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import $ from 'jquery';

export default{
    data(){
        return {
            products: [],
            filterProducts: [],
            pagination: {},
            item: {},
            cart: {},
            coupon_code: '',
            show: null,
            
        }
    },
    methods:{
        getProducts(page = 1){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            const vm = this;
            this.$http.get(api).then((res) =>{
                console.log(res.data)
                vm.products = res.data.products;
                vm.pagination = res.data.pagination;
                vm.show = true
            })
        },
        getProduct(product){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${product.id}`;
            const vm = this;
            this.$http.get(api).then((res) =>{
                vm.item = res.data.product
                $('#productModal').modal('show');
            })
        },
        filterProduct(e){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
            const content = e.target.textContent;
            const vm = this
            this.$http.get(api).then((res) =>{
                if (content === '火影' || content === '遊戲王' || content === "七龍珠"){
                    var filterArray = res.data.products.filter((item) => {
                        return item.category === content
                    })
                        vm.show = false
                        vm.products = filterArray
                        console.log(content)
                }else {
                    vm.getProducts()
                }
            })

        },
        addToCart(id,qty = 1){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty
            };
            this.$http.post(url,{data: cart}).then((response) => {
                console.log(response);
                vm.getCart();
                $('#productModal').modal('hide');
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data
                console.log(response);
            });
        },
        removeCartItem(id){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            this.$http.delete(url).then((response) => {
                this.getCart();
                console.log(response);
            });
        },
        addCouponCode(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.coupon_code
            }
            this.$http.post(url,{data: coupon}).then((response) => {
                this.getCart();
                console.log(response);
            });
        },
        openCart(){
            const cart_list = document.querySelector('.cart-list')
            cart_list.classList.toggle('open-cart')
        },   
    },
    created(){
        this.getProducts();
        this.getCart();
    }
}

</script>

<style scoped lang="sass">
$colorBlue: #40acf1

.banner
    .slide-img
        display: block
        margin: 0 auto
        width: 300px
        height: 400px
    .slide-box
        flex-wrap: wrap
    
.row-space-around
    justify-content: space-around !important

.card-img
    max-width: 100%
    
.product-category
    background-color: $colorBlue
    color: #fff
    display: inline-block

.inventory
    margin-top: 100px

.shopping-cart
    width: 50px
    height: 50px
    line-height: 50px
    display: inline-block
    font-size: 26px
    text-align: center
    border-radius: 50%
    background: #f2b450
    position: fixed
    bottom: 30px
    right: 30px
    cursor: pointer
.cart-num
    width: 22px
    height: 22px
    line-height: 22px
    text-align: center
    border-radius: 50%
    color: #fff
    display: inline-block
    position: absolute
    background: red
    right: 0
    top: -5px
    font-size: 16px

.cart-list
    display: none

.open-cart
    display: block
    position: fixed
    top: 50%
    left: 50%
    width: 100%
    max-width: 600px
    background: #fff
    transform: translate(-50%,-50%)
    font-size: 20px
    border: 1px solid #000
    padding: 20px
    z-index: 1

.pagination
    margin: 30px 0
    display: flex
    justify-content: center
    a
        font-weight: bold
        padding: 5px 10px
        text-decoration: none

.btn-list
    position: sticky
    top: 0

.cart-item-img
    width: 50px
</style>
