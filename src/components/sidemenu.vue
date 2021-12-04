<template>
     <div class="catagories-side-menu">
        <!-- Close Icon -->
        <div id="sideMenuClose">
           <i class="ti-close"></i>
        </div>
        <!--  Side Nav  -->
        <div class="nav-side-menu">
            <div class="menu-list">
                <h6>Categories</h6>
                <ul id="menu-content" class="menu-content menu_content collapse out">
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#women" class="collapsed active">
                        <router-link to="#">Woman wear <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="women">
                            <li><router-link to="#">Midi Dresses</router-link></li>
                            <li><router-link to="#">Maxi Dresses</router-link></li>
                            <li><router-link to="#">Prom Dresses</router-link></li>
                            <li><router-link to="#">Little Black Dresses</router-link></li>
                            <li><router-link to="#">Mini Dresses</router-link></li>
                        </ul>
                    </li>
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#man" class="collapsed">
                        <router-link to="#">Man Wear <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="man">
                            <li><router-link to="#">Man Dresses</router-link></li>
                            <li><router-link to="#">Man Black Dresses</router-link></li>
                            <li><router-link to="#">Man Mini Dresses</router-link></li>
                        </ul>
                    </li>
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#kids" class="collapsed">
                        <router-link to="#">Children <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="kids">
                            <li><router-link to="#">Children Dresses</router-link></li>
                            <li><router-link to="#">Mini Dresses</router-link></li>
                        </ul>
                    </li>
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#bags" class="collapsed">
                        <router-link to="#">Bags &amp; Purses <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="bags">
                            <li><router-link to="#">Bags</router-link></li>
                            <li><router-link to="#">Purses</router-link></li>
                        </ul>
                    </li>
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#eyewear" class="collapsed">
                        <router-link to="#">Eyewear <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="eyewear">
                            <li><router-link to="#">Eyewear Style 1</router-link></li>
                            <li><router-link to="#">Eyewear Style 2</router-link></li>
                            <li><router-link to="#">Eyewear Style 3</router-link></li>
                        </ul>
                    </li>
                    <!-- Single Item -->
                    <li data-toggle="collapse" data-target="#footwear" class="collapsed">
                        <router-link to="#">Footwear <span class="arrow"></span></router-link>
                        <ul class="sub-menu collapse" id="footwear">
                            <li><router-link to="#">Footwear 1</router-link></li>
                            <li><router-link to="#">Footwear 2</router-link></li>
                            <li><router-link to="#">Footwear 3</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>