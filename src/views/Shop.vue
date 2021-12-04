<template>
    <div>
        <div>
      
     
    <div >
 
        <!-- ****** Header Area Start ****** -->
        <!-- ****** Header Area End ****** -->

       <discount/>

        <!-- ****** Quick View Modal Area Start ****** -->
        <div class="modal fade" id="quickview" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                    <div class="modal-body">
                        <div class="quickview_body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-5">
                                        <div class="quickview_pro_img">
                                            <img src="../.././public/img2/img/product-img/product-1.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-7">
                                        <div class="quickview_pro_des">
                                            <h4 class="title">Boutique Silk Dress</h4>
                                            <div class="top_seller_product_rating mb-15">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <h5 class="price">$120.99 <span>$130</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                            <router-link to="#">View Full Product Details</router-link>
                                        </div>
                                        <!-- Add to Cart Form -->
                                        <form class="cart" method="post">
                                            <div class="quantity">
                                                <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>

                                                <input type="number" class="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1">

                                                <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                            <button type="submit" name="addtocart" value="5" class="cart-submit">Add to cart</button>
                                            <!-- Wishlist -->
                                            <div class="modal_pro_wishlist">
                                                <router-link to="wishlist.html" target="_blank"><i class="ti-heart"></i></router-link>
                                            </div>
                                            <!-- Compare -->
                                            <div class="modal_pro_compare">
                                                <router-link to="compare.html" target="_blank"><i class="ti-stats-up"></i></router-link>
                                            </div>
                                        </form>

                                        <div class="share_wf mt-30">
                                            <p>Share With Friend</p>
                                            <div class="_icon">
                                                <router-link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></router-link>
                                                <router-link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></router-link>
                                                <router-link to="#"><i class="fa fa-pinterest" aria-hidden="true"></i></router-link>
                                                <router-link to="#"><i class="fa fa-google-plus" aria-hidden="true"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ****** Quick View Modal Area End ****** -->

        <section class="shop_grid_area section_padding_100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="shop_sidebar_area">
                           
                            <div class="widget catagory mb-50">
                                <!--  Side Nav  -->
                                <div class="nav-side-menu">
                                    <h6 class="mb-0">Catagories</h6>
                                    <div class="menu-list">
                                        <ul id="menu-content2" class="menu_content collapse out">
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#women2">
                                                <router-link to="#">Woman wear</router-link>
                                                <ul class="sub-menu collapse show" id="women2">
                                                    <li><router-link to="#">Midi Dresses</router-link></li>
                                                    <li><router-link to="#">Maxi Dresses</router-link></li>
                                                    <li><router-link to="#">Prom Dresses</router-link></li>
                                                    <li><router-link to="#">Little Black Dresses</router-link></li>
                                                    <li><router-link to="#">Mini Dresses</router-link></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#man2" class="collapsed">
                                                <router-link to="#">Man Wear</router-link>
                                                <ul class="sub-menu collapse" id="man2">
                                                    <li><router-link to="#">Man Dresses</router-link></li>
                                                    <li><router-link to="#">Man Black Dresses</router-link></li>
                                                    <li><router-link to="#">Man Mini Dresses</router-link></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#kids2" class="collapsed">
                                                <router-link to="#">Children</router-link>
                                                <ul class="sub-menu collapse" id="kids2">
                                                    <li><router-link to="#">Children Dresses</router-link></li>
                                                    <li><router-link to="#">Mini Dresses</router-link></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#bags2" class="collapsed">
                                                <router-link to="#">Bags &amp; Purses</router-link>
                                                <ul class="sub-menu collapse" id="bags2">
                                                    <li><router-link to="#">Bags</router-link></li>
                                                    <li><router-link to="#">Purses</router-link></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#eyewear2" class="collapsed">
                                                <router-link to="#">Eyewear</router-link>
                                                <ul class="sub-menu collapse" id="eyewear2">
                                                    <li><router-link to="#">Eyewear Style 1</router-link></li>
                                                    <li><router-link to="#">Eyewear Style 2</router-link></li>
                                                    <li><router-link to="#">Eyewear Style 3</router-link></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#footwear2" class="collapsed">
                                                <router-link to="#">Footwear</router-link>
                                                <ul class="sub-menu collapse" id="footwear2">
                                                    <li><router-link to="#">Footwear 1</router-link></li>
                                                    <li><router-link to="#">Footwear 2</router-link></li>
                                                    <li><router-link to="#">Footwear 3</router-link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="widget price mb-50">
                                <h6 class="widget-title mb-30">Filter by Price</h6>
                                <div class="widget-desc">
                                    <div class="slider-range">
                                        <div data-min="0" data-max="3000" data-unit="$" class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                            <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                        </div>
                                        <div class="range-price">Price: 0 - 1350</div>
                                    </div>
                                </div>
                            </div>

                            <div class="widget color mb-70">
                                <h6 class="widget-title mb-30">Filter by Color</h6>
                                <div class="widget-desc">
                                    <ul class="d-flex justify-content-between">
                                        <li class="gray"><router-link to="#"><span>(3)</span></router-link></li>
                                        <li class="red"><router-link to="#"><span>(25)</span></router-link></li>
                                        <li class="yellow"><router-link to="#"><span>(112)</span></router-link></li>
                                        <li class="green"><router-link to="#"><span>(72)</span></router-link></li>
                                        <li class="teal"><router-link to="#"><span>(9)</span></router-link></li>
                                        <li class="cyan"><router-link to="#"><span>(29)</span></router-link></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget size mb-50">
                                <h6 class="widget-title mb-30">Filter by Size</h6>
                                <div class="widget-desc">
                                    <ul class="d-flex justify-content-between">
                                        <li><router-link to="#">XS</router-link></li>
                                        <li><router-link to="#">S</router-link></li>
                                        <li><router-link to="#">M</router-link></li>
                                        <li><router-link to="#">L</router-link></li>
                                        <li><router-link to="#">XL</router-link></li>
                                        <li><router-link to="#">XXL</router-link></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget recommended">
                                <h6 class="widget-title mb-30">Recommended</h6>

                                <div class="widget-desc">
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex mb-30">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="../.././public/img2/img/product-img/product-10.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Men’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex mb-30">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="../.././public/img2/img/product-img/product-11.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Blue mini top</h6>
                                            <p>$ 19.99</p>
                                        </div>
                                    </div>
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="../.././public/img2/img/product-img/product-12.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Women’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="shop_grid_product_area">
                            <div class="row">

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-1.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.3s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-2.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.4s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-3.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.5s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-4.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.6s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-5.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.7s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-6.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.8s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-7.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.9s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-8.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>

                                <!-- Single gallery Item -->
                                <div class="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="1s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <img src="../.././public/img2/img/product-img/product-9.jpg" alt="">
                                        <div class="product-quicview">
                                            <router-link to="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></router-link>
                                        </div>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price">$39.90</h4>
                                        <p>Jeans midi cocktail dress</p>
                                        <!-- Add to Cart -->
                                        <router-link to="#" class="add-to-cart-btn">ADD TO CART</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                            <nav aria-label="Page navigation">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item active"><router-link class="page-link" to="#">01</router-link></li>
                                    <li class="page-item"><router-link class="page-link" to="#">02</router-link></li>
                                    <li class="page-item"><router-link class="page-link" to="#">03</router-link></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- ****** Footer Area Start ****** -->
        <navfooter/>
        
        <!-- ****** Footer Area End ****** -->
    </div>
        </div>
    </div>
</template>


<script>
   import navfooter from '../components/footer.vue'
import Discount from '../components/discount.vue'
   export default{
    components:{
        navfooter,
        Discount
    },
    data (){
        return{
       
        }
    }
}
</script>


<style scoped>

</style> 

