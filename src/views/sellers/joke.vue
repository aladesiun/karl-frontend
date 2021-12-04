<template>
<div class="joke">
<h1
    :style="{color:$store.state.colorCode}"
>
    {{$store.state.counter}}</h1>
<div class="square">
{{$store.state.counter}}
    <sup>2</sup>= {{$store.getters.counterSquare}}
</div>
<div>
    <button @click="$store.dispatch('decrease')">-</button>
    <button @click="$store.dispatch('increase')">+</button>
</div>
<label for="color">Type in any color of choice</label>
<input type="text" name="" id="" v-model="$store.state.colorCode">
</div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.joke{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.joke button{
    padding: 10px 20px;
    margin: 5px;
}
</style>