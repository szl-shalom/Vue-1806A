<template>
    <div id="demo">
        <button v-on:click="show = !show">Toggle</button>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
        >
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
import 
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
} */
</style>