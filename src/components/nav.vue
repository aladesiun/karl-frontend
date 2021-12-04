<template>
    <header class="header_area bg-img background-overlay-white" style="background-image: url(../.././public/img2/img/bg-img/bg-1.jpg);">
            <!-- Top Header Area Start -->
            <div class="top_header_area">
                <div class="container h-100">
                    <div class="row h-100 align-items-center justify-content-end">

                        <div class="col-12 col-lg-7">
                            <div class="top_single_area d-flex align-items-center">
                                <!-- Logo Area -->
                                <div class="top_logo">
                                    <router-link to=""><img src="../.././public/img2/img/core-img/logo.png" alt=""></router-link>
                                </div>
                                <!-- Cart & Menu Area -->
                                <div class="header-cart-menu d-flex align-items-center ml-auto">
                                    <!-- Cart Area -->
                                    <div class="cart">
                                        <router-link to="#" id="header-cart-btn" target="_blank"><span class="cart_quantity">2</span> <i class="ti-bag"></i> Your Bag $20</router-link>
                                        <!-- Cart List Area Start -->
                                        <ul class="cart-list">
                                            <li>
                                                <router-link to="#" class="image"><img src="../.././public/img2/img/product-img/product-10.jpg" class="cart-thumb" alt=""></router-link>
                                                <div class="cart-item-desc">
                                                    <h6><router-link to="#">Women's Fashion</router-link></h6>
                                                    <p>1x - <span class="price">$10</span></p>
                                                </div>
                                                <span class="dropdown-product-remove"><i class="icon-cross"></i></span>
                                            </li>
                                            <li>
                                                <router-link to="#" class="image"><img src="../.././public/img2/img/product-img/product-11.jpg" class="cart-thumb" alt=""></router-link>
                                                <div class="cart-item-desc">
                                                    <h6><router-link to="/">Women's Fashion</router-link></h6>
                                                    <p>1x - <span class="price">$10</span></p>
                                                </div>
                                                <span class="dropdown-product-remove"><i class="icon-cross"></i></span>
                                            </li>
                                            <li class="total">
                                                <span class="pull-right">Total: $20.00</span>
                                                <router-link to="/cart" class="btn btn-sm btn-cart">Cart</router-link>
                                                <router-link to="/checkout" class="btn btn-sm btn-checkout">Checkout</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Top Header Area End -->
            <div class="main_header_area">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-12 d-md-flex justify-content-between">
                            <!-- Header Social Area -->
                            <div class="header-social-area">
                                <router-link to="/"><span class="karl-level">Welcome</span> <i class="fa fa-user" aria-hidden="true"></i></router-link>
                                <!-- <router-link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></router-link>
                                <router-link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></router-link> -->
                         <router-link to="#" v-if='user !== null'>{{user.firstname}}</router-link>
                                <a v-else>Visitor</a>
                            </div>
                            <!-- Menu Area -->
                            <div class="main-menu-area">
                                <nav class="navbar navbar-expand-lg align-items-start">

                                    <button class="navbar-toggler navbar_toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="ti-menu"></i></span></button>

                                    <div class="collapse navbar-collapse align-items-start collapse navbar_collapse" id="karl-navbar">
                                        <ul class="navbar-nav animated" id="nav">
                                            <li class="nav-item nav_color active"><router-link class="nav-link" to="/">Home</router-link></li>
                                            <li class="nav-item nav_color dropdown">
                                                <router-link class="nav-link dropdown-toggle" to="#" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</router-link>
                                                <div class="dropdown-menu" aria-labelledby="karlDropdown">
                                                    <router-link class="dropdown-item" to="/">Home</router-link>
                                                    <router-link class="dropdown-item" to="/shop">Shop</router-link>
                                                    <router-link class="dropdown-item" to="/product-details">Product Details</router-link>
                                                    <router-link class="dropdown-item" to="/cart">Cart</router-link>
                                                    <router-link class="dropdown-item" to="/checkout">Checkout</router-link>
                                                </div>
                                            </li>
                                            <li class="nav-item nav_color dropdown" v-if='user == null'>
                                                <button type="button" class="btn btn-primary dropdown_btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                  Sign in
                                                </button>

                                                <!-- Modal -->
                                                <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal_dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header modal_header">
                                                                <div class="top_logo">
                                                                <router-link to="#"><img src="../.././public/img2/img/core-img/logo.png" alt=""></router-link>
                                                                </div>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <form method="post" @submit.prevent="signup" v-show="register">
                                                                     <div class="sign_wrap">
                                                                        <notification/>
                                                                    <div class="row">

                                                                        <div class="col-lg-6">
                                                                            <div class="mb-3">
                                                                                <label for="firstname" class="form-label">Firstname</label>
                                                                                <input type="text" class="form-control register_input" id="firstname" placeholder="Deely" v-model="userreg.firstname">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="mb-3">
                                                                                <label for="lastname" class="form-label">Lastname</label>
                                                                                <input type="text" class="form-control register_input" id="lastname" placeholder="Kate" v-model="userreg.lastname">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3">
                                                                        <label for="email" class="form-label">Email</label>
                                                                        <input type="email" class="form-control register_input" id="email" placeholder="name@example.com" v-model="userreg.email">
                                                                    </div>
                                                                    <div class="mb-3">
                                                                        <label for="password" class="form-label">Password</label>
                                                                        <input type="password" class="form-control register_input" id="password" placeholder="..." v-model="userreg.password">
                                                                    </div>
                                                                    <div class="mb-3">
                                                                        <label for="confirm-password" class="form-label">Confirm Password</label>
                                                                        <input type="password" class="form-control register_input" id="confirm-password" placeholder="..." v-model="userreg.confirmpassword">
                                                                    </div>
                                                                    <div class="d-flex justify-content-between">
                                                                        <button class="btn register_btn" type="submit">submit</button>
                                                                        <p @click="loginshow =!loginshow"><router-link to="#" class="create_acc" id="create_account">Already have an account</router-link></p>
                                                                    </div>       
                                                               </div>
                                                            </form> 
                                                               
                                                               <div class="login_wrap">
                                                                   <form method="post" @submit.prevent="login()" v-show="loginshow">
                                                                       <notification/>
                                                                        <div class="row">
                                                                            <div class="log-dv">
                                                                                <h4 class="text-center">Login</h4>
                                                                            </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="mb-3">
                                                                                <label for="emaillog" class="form-label">Email</label>
                                                                                <input type="text" class="form-control register_input" id="emaillog" placeholder="Deely@xyz.com" v-model="userlog.email">
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="mb-3">
                                                                                <label for="passwordlog" class="form-label">password</label>
                                                                                <input type="password" class="form-control register_input" id="passwordlog" placeholder="...." v-model="userlog.password">
                                                                            </div>
                                                                        </div>
                                                                        <div class="d-flex justify-content-between">
                                                                        <button class="btn register_btn" type="submit">Login</button>
                                                                        <p @click="register =!register "><router-link to="#" class="create_acc" id="create_account">don't have an account</router-link></p>
                                                                    </div>
                                                                    </div>
                                                                   </form> 
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item nav_color" v-else><span class="nav-link"  @click="logout">Log out</span></li>

                                            <li class="nav-item nav_color dropdown" v-if='user == null'>
                                                <button type="button" class="btn btn-primary dropdown_btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                                  Reset password
                                                </button>

                                                <!-- Modal -->
                                                <div class="modal fade " id="staticBackdrop2" data-bs-backdrop="static2" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal_dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header modal_header">
                                                                <div class="top_logo">
                                                                <router-link to="#"><img src="../.././public/img2/img/core-img/logo.png" alt=""></router-link>
                                                                </div>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                               <div class="login_wrap">
                                                                   <form method="post" @submit.prevent="ForgetPassword()">
                                                                       <notification/>
                                                                        <div class="row">
                                                                            <div class="log-dv">
                                                                                <h4 class="text-center">Reset Password</h4>
                                                                            </div>
                                                                        <div class="col-lg-12">
                                                                            <div class="mb-3">
                                                                                <label for="emaillog" class="form-label">Email</label>
                                                                                <input type="text" class="form-control register_input" id="emailreset" placeholder="Deely@xyz.com" v-model="resetPassword.email">
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div class="d-flex justify-content-between">
                                                                        <button class="btn register_btn" type="submit">Reset</button>
                                                                    </div>
                                                                    </div>
                                                                   </form> 
                                                               </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item nav_color"><router-link class="nav-link" to="#"><span class="karl-level">hot</span> Shoes</router-link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <!-- Help Line -->
                            <div class="sale-line d-flex">
                                <!-- <router-link to="tel:+346573556778"><i class="ti-headphone-alt"></i> +34 657 3556 778</router-link> -->
                                <router-link to="/sale"><p class="b_seller">Become a seller<i class="far fa-badge-dollar"></i></p></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>
<script>
import notification from '../components/notification.vue'
import {mapState} from 'vuex'
export default {
    components:{
        notification
    },
    data(){
        return{
            loginshow:true,
            register:false,
            userreg:{
                firstname:'',
                lastname:'',
                email:'',
                password:'',
                confirmpassword:''
            },
            userlog:{
                 email:'',
                password:'',
            },
            resetPassword:{
                email:''
            },
            remember_token:''
        }
    },
    computed:{
        ...mapState({
            user: (state)=>state.user,
            authenticated: (state) => state.authenticated
            
        })
    },
    methods:{
        ForgetPassword(){
            if (this.resetPassword.email.length == 0) {
                    alert('All fields are required');
                
            }
            this.$store.dispatch('post',{
                endpoint:'reset-password',
                details:this.resetPassword
            })
            .then((data)=>{
                if (data.data.data) {
                    this.remember_token=data.data.data.link
                    console.log(this.remember_token);
                }
            })
        },
        signup(){
            if(this.userreg.lastname.length == 0 || this.userreg.firstname.length == 0 || this.userreg.email.length == 0 || this.userreg.password.length == 0 || this.userreg.confirmpassword.length == 0 ){
                    alert('All fields are required');
                    

               if (this.userreg.password !== this.userreg.confirmpassword) {
                    alert('password does not mactch');


                    return false;
                }
                return false;

            }

            this.loading = true;

            this.$store.dispatch('post', {
                endpoint: 'signup',
                details: this.userreg
            })
            .then((data) => {
                if(data.data.status){
                    this.authenticated=true
                    var result = data.data.data;
                    localStorage.setItem('token', data.data.token);
                    result.token=data.data.token;
                    this.$store.commit('setUser', result);
                    this.$store.commit('setNotification',{type:1, message:'Registration Successful'});
                    
                }
                this.loading = false;
            })
            .catch((error) => { 
                console.log(error)
            })
        },
          login(){
            if(this.userlog.email.length == 0 || this.userlog.password.length == 0){
                alert('All fields are required');
                 return false;
            }   
            this.loading = true;

            this.$store.dispatch('post', {
                endpoint: 'login',
                details: this.userlog 
            })
            .then((data) => {

                if(data.data.status){
                    this.authenticated=true

                    var result = data.data.data;
                    localStorage.setItem('token', data.data.token);
                    result.token=data.data.token;
                    this.$store.commit('setUser', result);
                    this.$store.commit('setNotification',{type:1, message:'welcome back!!'});

                }
                this.loading = false;
            })
            .catch((error) => {
                console.log(error)
            })
        },
        logout(){
            this.authenticated= false

            this.$store.commit('logout')
        }
    }
}
</script>
