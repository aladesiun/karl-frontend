import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/sellers/dashboard'),
   
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue'),
    meta:{
      AuthRequired:true
    }
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: () => import( '../views/Checkout.vue')
  },

  {
    path: '/product-details',
    name: 'Product-details',
    component: () => import( '../views/Product-details.vue'),
    meta:{
      AuthRequired:true
    }
  },

  {
    path: '/shop',
    name: 'Shop',
    component: () => import( '../views/Shop.vue'),
    meta:{
      AuthRequired:true
    }
  },
  {
    path: '/sale',
    name: 'Sale',
    component: () => import( '../views/sale.vue'),
    meta:{
      AuthRequired:true
    }
  },
  {
    path: '/joke',
    name: 'joke',
    component: () => import( '../views/sellers/joke'),
   
  },
]   

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.AuthRequired)) {
      if (localStorage.getItem('user') == null) {
          alert('you have to login')
          next({
              path: '/',
              name:'Home'
          })
      } 
  }next()
});