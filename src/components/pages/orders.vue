<template>
    <div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">訂單日期</th>
                    <th width="120">Email</th>
                    <th>購買款項</th>
                    <th width="120">應付金額</th>
                    <th width="100">是否付款</th>
                    <th width="100">付款日期</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, i) in orders" :key="i">
                    <td>{{order.create_at | formatDate}}</td>
                    <td>{{order.user.email}}</td>
                    <td>
                        <ul class="list-unstyled">
                            <li v-for="(product, i) in order.products" :key="i">
                                {{ product.product.title }} 數量：{{ product.qty }}
                                {{ product.product.unit }}
                            </li>
                        </ul>
                    </td>
                    <td class="text-right">
                        {{order.total}}
                    </td>
                    <td>
                        <strong v-if="order.is_paid" class="text-success">已付款</strong>
                        <span v-else class="text-muted">尚未付款</span>
                    </td>
                    <td>
                        {{order.paid_date | formatDate}}
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                orders: [],
                package: [],
            }
        },
        methods:{
            getOrders(){
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders`;
                console.log(api)
                const vm = this;
                this.$http.get(api,vm.orders).then((res)=>{
                    console.log(res.data.orders)
                    vm.orders = res.data.orders
                })
            },
        },
        filters:{
            formatDate:function(){
                const dates = new Date()
                const year = dates.getFullYear()
                const month = dates.getMonth() + 1
                const date = dates.getDate()
                return `${year}/${month}/${date}`
            }
        },
        created(){
            this.getOrders();
        }
    }
</script>