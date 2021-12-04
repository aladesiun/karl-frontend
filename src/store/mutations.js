export default{
    increase(state, randomNumber){
        state.counter+= randomNumber
    },
    decrease(state, randomNumber){
        state.counter-= randomNumber

    },
    setNotification(state, data){
        state.notification.type = data.type;
        state.notification.message = data.message;
    },

    setUser(state, data){
        state.user = data; 

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
    },

    setpost(state, data){
        state.post = data; 

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('post', result);
    },
    getpost(state){
        var data = localStorage.getItem('post');
        data = decodeURIComponent(data);
        state.post = data;

        data = JSON.parse(data);



        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('post', result);
        // console.log(result + "result");
        // console.log(data.token);
    },
    getUser(state){
        var data = localStorage.getItem('user');
        data = decodeURIComponent(data);
        state.user = data;

        data = JSON.parse(data);


        state.token  = data.token;

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
        // console.log(result + "result");
        // console.log(data.token);
    },

    logout(state){
        state.authenticated = false
        this.authstatus = false
        window.localStorage.removeItem('user');
        state.user = {};
        state.token = null;
        window.location.href = '/';


    },

}