export default {
    getState:(state)=>{
        return state;
    },
    counterSquare(state){
        return state.counter + state.counter
    }
}