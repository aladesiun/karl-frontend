<template>
  <div id="app">
    <navheader/>
    <router-view/>
  </div>
</template>
<script>
import navheader from './components/nav.vue';
export default {
  components:{
    navheader
  },
  created(){

    var token = localStorage.getItem('token');
    var userr=localStorage.getItem('user');

    if(token && userr){
        this.$store.state.token = token;
        var user = decodeURIComponent(userr);
        this.$store.state.user = JSON.parse(user);
    }
     if(this.$route.meta.AuthRequired || this.$route.matched.find((d)=>d.meta.AuthRequired)){
        if(!userr){ window.location.href='/'; return false; }     
    }
  }
}
</script>
<style>

</style>
