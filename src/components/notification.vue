<template>
    <div>
        <div v-if="notification.type == 1" class="alert alert-success" role="alert">
            <b style="font-weight: 300;" v-html="notification.message"></b>
        </div>
        <div v-if="notification.type == 2" class="alert alert-danger" role="alert">
            <b style="font-weight: 300;" v-html="notification.message"></b>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
    name:'notification',
    computed:{
        ...mapState({ 
            notification:(state)=>state.notification
        }),
    },
}
</script>

<style>

</style>