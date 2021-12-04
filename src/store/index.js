import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


const store = new Vuex.Store({
    state:{
        counter:0,
        endpoint: process.env.VUE_APP_ENDPOINT,
        user: null,
        token: null, 
        authenticated:false,
        notification: {
            type: 0,
            message: ''
        } ,
        colorCode:'' 
    },
    getters,
    mutations,
    actions
});

export default store