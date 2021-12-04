<template>
<div class="container-fluid nav-container">
    <div class="col-sm-12 mb-3 navbar-wrap">
        <p>Karl store</p>

        <img src="" alt="" class="nav-logo">
        <div class="nav-details-wrap">
            <img src="" alt="" class="nav-bell-icon">
            <div class="nav-profile-wrap">
                <div class="nav-pIcon-wrap">
                    <img src="" alt="" class="nav-profile-icon">
                </div>
                <p class="nav-profile-txt">admin</p>
            </div>
        </div>
    </div>

<div class="sidebar-wrapper">
    <div class="sidebar-content" id="sidebar-content">
        <div class="sidebar-link-wrap">
            <a href="" class="sidebar-link @if($route_name == 'admin') active @endif">
                <img src=""
                     alt=""
                     class="sidebar-icon ">
                     <i class="far fa-th-large"></i>
                <span class="sidebar-link-txt">Dashboard</span>
            </a>
        </div>
        <div class="sidebar-link-wrap">
            <a href="" class="sidebar-link @if($route_name == 'cars') active @endif">
                <img src="" alt="" class="sidebar-icon car-icon">
                <span class="sidebar-link-txt ">Cars</span>
            </a>
        </div>
        <div class="sidebar-link-wrap">
            <a href="" class="sidebar-link @if($route_name == 'inquiries') active @endif">
                <img src="" alt="" class="sidebar-icon">
                <span class="sidebar-link-txt">Inquiries</span>
            </a>
        </div>
        <div class="sidebar-link-wrap">
            <a href="" class="sidebar-link @if($route_name == 'blogs') active @endif">
                <img src="" alt="" class="sidebar-icon">
                <span class="sidebar-link-txt">Blogs</span>
            </a>
        </div>
        <div class="sidebar-link-wrap">
            <a href="" class="sidebar-link @if($route_name == 'admins') active @endif">
                <img src="" alt="" class="sidebar-icon">
                <span class="sidebar-link-txt">Admins</span>
            </a>
        </div>
        <div class="sidebar-logout-wrap">
            <div class="logout-content">
                <div class="sidebar-logout-cont">
                    <img src="" alt="" class="logout-img">
                    <div class="logout-txt-wrap">
                        <p class="logout-name">temitope</p>
                        <p class="logout-tit">ADMIN</p>
                    </div>
                </div>
                <button class="sidebar-logout-btn" type="button" data-toggle="modal" data-target="#staticBackdrop">
                    <img src="" alt="" class="logout-icon">
                </button>

            </div>
        </div>
    </div>
</div>

  

</div>
</template>
<style scoped src="@/assets/css/sales.css"></style>