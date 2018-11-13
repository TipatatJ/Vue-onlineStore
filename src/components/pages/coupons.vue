<template>
    <div>
        <div class="text-right">
            <button data-toggle="modal" data-target="#couponModal">建立新的優惠券</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">活動</th>
                    <th width="120">折扣百分比</th>
                    <th width="120">是否啟用</th>
                    <th width="100">刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coupon in coupons" :key="coupon.id">
                    <td>{{coupon.title}}</td>
                    <td>{{coupon.percent}}%</td>
                    <td>
                        <span class="text-success" v-if="coupon.is_enabled">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="deleteCoupons(coupon)" >刪除</button>
                    </td>

                </tr>
            </tbody>
            
        </table>


        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="row">

                            <div class="col">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title"
                                        placeholder="請輸入標題" v-model="tempCoupons.title">
                                </div>

                                <div class="form-group">
                                    <label for="coupon_code">折扣代碼</label>
                                    <input type="text" class="form-control" id="coupon_code"
                                        placeholder="請輸入折扣代碼" v-model="tempCoupons.code" >
                                </div>

                                <div class="form-group">
                                    <label for="expire_date">到期日</label>
                                    <input type="date" class="form-control" id="expire_date"
                                        placeholder="請輸入到期日" v-model="tempCoupons.due_date">
                                </div>

                                <div class="form-group">
                                    <label for="discount_percent">百分比</label>
                                    <input type="number" class="form-control" id="discount_percent"
                                        placeholder="請輸入百分比" v-model="tempCoupons.percent">
                                </div>
                                <hr>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"
                                        id="is_enabled" v-model="tempCoupons.is_enabled" :true-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                        是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateCoupons" >更新優惠券</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default{
        data(){
            return {
                coupons: [],
                tempCoupons: {

                }
            }
        },
        methods: {
            createCoupons(){
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons`;
                const vm = this;
                this.$http.get(api,{data:vm.coupons}).then((res) =>{
                    console.log(res.data)
                    vm.coupons = res.data.coupons

                })
            },
            updateCoupons(){
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
                const vm = this;
                this.$http.post(api,{data:vm.tempCoupons}).then((res) => {
                    console.log(res.data)

                    if (res.data.success){
                        $('#couponModal').modal('hide');
                        vm.createCoupons();
                    }else{
                        vm.createCoupons();
                        console.log('新增失敗')
                    }
                })
            },
            deleteCoupons(coupon){
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${coupon.id}`;
                const vm = this
                    this.$http.delete(api).then((response)=>{
                    if (response.data.success){
                        vm.createCoupons();
                    }
                })
            },
        },
        created(){
            this.createCoupons()
        }
    }
</script>