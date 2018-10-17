<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated fadeOutDown">
        <div class="wrapper" v-if="showInitial">
            <div class="image-container">
                <img class="image" src="../../public/img/sticker2.webp" alt="pepe1">
            </div>
            <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <div v-if="text1">
                    <h1>I wish you today a good day</h1>
                    <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">
                        <h2 v-if="text2">кудряха)</h2>
                    </transition>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "GoodMorning",
        data: () => ({
            showInitial: false,
            text1: false,
            text2: false,
        }),
        mounted () {
            setTimeout(() => this.showInitial = true, 1000)
            setTimeout(() => this.text1 = true, 2500)
            setTimeout(() => this.text2 = true, 4000)
        }
    }
</script>

<style>

</style>