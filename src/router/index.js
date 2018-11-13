import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/login.vue'
import Dashboard from '@/components/dashboard.vue'
import Products from '@/components/pages/products.vue'
import Orders from '@/components/pages/orders.vue'
import Coupons from '@/components/pages/coupons.vue'
import Front from '@/components/index.vue'
import CustomerOrders from '@/components/front-end/CustomerOrders.vue'
import Payment from '@/components/front-end/payment.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: Coupons
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Front,
    },
    {
      path: '/order',
      name: 'order',
      component: CustomerOrders,
    },
    {
      path: '/payment/:orderId',
      name: '/payment',
      component: Payment,
    }
  ]
})
