import axios from 'axios'

export default{
    increase({commit}){
        axios.get('http://karlcontroller.epizy.com/api/getrandomnumber')
        .then((data)=>{
            if (data.data) {
                console.log(data.data.data);
                var randomNumber= data.data.data
                commit('increase', randomNumber)
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    decrease({commit}){
        axios.get('http://karlcontroller.epizy.com/api/getrandomnumber')
        .then((data)=>{
            if (data.data) {
                console.log(data.data.data);
                var randomNumber= data.data.data
                commit('decrease', randomNumber)
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    handleError(context, error){
        if(error.request.status == 422){
            var resp = JSON.parse(error.request.response);
            var err = resp.error;
            var msg = '';
            for(var item in err){
                msg = err[item][0];
                break;
            }
            context.commit('setNotification', {type : 2, message: msg});
            return msg;
        }
        else if (error.request.status == 303) {
            resp = JSON.parse(error.request.response);
            context.commit('setNotification', { type: 2, message: resp.error });
        } 
        else if (error.request.status == 404) {
            resp = JSON.parse(error.request.response);
            msg = 'Request not found';
            context.commit('setNotification', { type: 2, message: msg });
        } 
        else if (error.request.status == 400) {
            resp = JSON.parse(error.request.response);
            msg = resp.msg;
            context.commit('setNotification', { type: 2, message: msg });
        } 
        else if (error.request.status == 401) {
            msg = 'Oops! Authentication error, Please login again';
            context.commit('setNotification', { type: 2, message: msg });
            context.commit('logout');
        } 
        else {
            msg = 'Oops! server error, Please try again';
            context.commit('setNotification', { type: 2, message: msg });
        }
    },
    
    post(context, data){
        return new Promise((resolve, reject) => {
            axios.post(context.state.endpoint + data.endpoint, data.details, {
                headers: { Authorization: 'Bearer ' + context.state.token},
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                console.log(error);
                context.dispatch('handleError', error);
                reject(error);
            })
        });
    },


    get(context, endpoint){
        return new Promise((resolve, reject) => {
            axios.get(context.state.endpoint + endpoint, {
                headers: {
                    Authorization: 'Bearer ' + context.state.token,
                },
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                context.dispatch('handleError', error);
                reject(error);
            })
        });
    }
}