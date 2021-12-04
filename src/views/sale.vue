<template>
    <div>
        <div id="sale">
            <div class="form_wrapper">
                <form method="post" @submit.prevent="postproduct" enctype="multiformdata">
                    <div class="product_cont">
                        <div class="row upload_row">
                            <div class="col-lg-12">

                                <div class="uplod_img_box"> 
                                    <notification/>
                                    <img src="img2/img/sale-img/r3.jpg" id="fileupload" class="upload_img" alt="img">
                                    <div id="img-preview">
                                    </div>
                                </div>
                            </div>            
                        </div>
                        <div class="row upload_row">
                        <div class="col-lg-12">
                            <div class="text-center position-relative">
                              <p class="txt_title"> Karl Fashion <i class="far fa-cut"></i></p>
                              <div class="position-absolute camera_wrap">
                                  <div class="upload_input_file">
                                    <label for="file"><i class="fal fa-camera" title="Upload your product"></i></label>
                                    <input type="file" id="file" @change="choose"> 
                                  </div>
                              </div>  
                            </div>
                        </div>
                        </div>
                        <div class="row upload_row">
                            <div class="col-lg-6">
                                <div class="input_product">
                                    <label for="product-name">Product name:</label>
                                    <input type="text" class="form-control" id="product-name" v-model="products.name"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                            <div class="input_product">
                                <label for="size">Size:</label>
                                <input type="text" class="form-control" id="size" v-model="products.size"/>
                            </div>
                            </div>
                        </div>
                        <div class="row upload_row">
                                <div class="col-lg-12">
                                    <div class="input_product">
                                        <label for="product-type">Categories:<i class="fal fa-users"></i></label>
                                        <select id="product-type" class="form-control product_select" v-model="products.category">
                                            <option>Women</option>
                                            <option>Men</option>
                                            <option>Boy</option>
                                            <option>Girl</option>
                                            <option>Baby</option>
                                        </select>
                                    </div>
                                </div>
                        </div>
                        <div class="row upload_row">
                                <div class="col-lg-12">
                                    <div class="input_product">
                                        <label for="price">Price-tag:<i class="fas fa-tags"></i></label>
                                        <input type="text" class="form-control" id="price" v-model="products.price"/>
                                    </div>
                                </div>
                        </div>
                        <div class="row upload_row">
                                <div class="col-lg-12">
                                    <div class="input_product">
                                        <label for="description">Description:</label>
                                        <textarea placeholder="..." class="form-control" id="description" v-model="products.description"></textarea>
                                    </div>
                                </div>
                        </div>             
                        <div class="d-flex justify-content-between upload_wrap">
                            <button class="btn upload_btn d-flex" type="submit"><p>UPLOAD</p><i class="fal fa-upload"></i></button>
                            <p class="pro_s"><i>Become a pro-seller...</i></p>
                        </div>
                    </div>
                </form>
            </div> 
        </div>

        <!-- ****** Footer Area Start ****** -->
          <navfooter/>
        <!-- ****** Footer Area End ****** -->
    </div>
</template>


<script>

import navfooter from '../components/footer.vue'
import notification from '../components/notification.vue'
import {mapState} from 'vuex'
export default{
    components:{
        navfooter,
        notification
    },
    data (){
        return{
            products:{
                name:'',
                category:'',
                size:'',
                price:'',
                description:'',
                image:''
            }
        }
    },
    computed:{
      money(){
          console.log(this.$store.state.user.email);
        return  this.$store.state.money;

      },
      ...mapState({
          user: (state)=> state.user
      })
  },
  methods:{
      choose(e){
        console.log(e );
        const imgPreview = document.querySelector("#img-preview");
            
   
            const files = e.files[0];
            if (files) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function () {
                    imgPreview.style.display = "block";
                    imgPreview.innerHTML = '<img src="' + this.result + '" />';
                });
            }
    

      },
        postproduct(){
            if(this.products.name.length == 0 || this.products.size.length == 0 ||
             this.products.price.length == 0 || this.products.category.length == 0 || this.products.description.length == 0 || 
             this.products.image.value == 0 ){
                    // alert('All fields are required');
                    
                setTimeout(() => {
                    this.$store.commit('setNotification',{type:2, message:'all fields are required'});
                                    
                }, 100);
            
                 return false;

            }

            this.loading = true;

            this.$store.dispatch('post', {
                endpoint: 'postproduct',
                details: this.products
            })
            .then((data) => {
                if(data.data.status){
                    this.authstatus =true
                    var result = data.data.data;
                    setTimeout(() => {
                        this.$store.commit('setNotification',{type:1, message:'Products posted!!'});
                    }, 2000);

                   console.log(result);
                    
                }
                this.loading = false;
            })
            .catch((error) => {
               

                console.log(error)

            })
        },
  }

}
</script>


<style scoped>

</style>