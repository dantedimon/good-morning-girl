<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated fadeOutDown">
        <div class="wrapper" v-if="showInitial">
            <div class="image-container">
                <img class="image" src="../../public/img/sticker2.webp" alt="pepe1">
            </div>
            <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <div v-if="text1">
                    <h1>I wish you a great day and good mood :)</h1>
                    <!--<transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDown">-->
                        <!--<h1 class="qq" v-if="text2">посылаю лучи радости и тд)))</h1>-->
                    <!--</transition>-->
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
    /*@import url('https://fonts.googleapis.com/css?family=Mali|Lato|Pacifico');*/
    h1{
        font-size: 2.2em!important;
    }
</style>