<template>
    <div id="app">
        <GoodMorning @done="firstDone" v-if="show === 1" />
        <GoodDay v-if="show === 2" />
    </div>
</template>

<script>
    import GoodMorning from './components/GoodMorning'
    import GoodDay from './components/GoodDay'

    export default {
        name: 'App',
        data: () => ({
            show: 1,
            first: true,
            second: false,
        }),
        components: {
            GoodMorning, GoodDay
        },
        methods: {
            firstDone () {
                this.show = 2
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Mali|Lato|Pacifico');
    @import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");

    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: 'Pacifico', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*background-color: #cfa6ef;*/
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;

        /*background:-webkit-radial-gradient(circle farthest-corner at bottom right, rgb(183, 88, 211) 10%, rgb(0, 255, 237) 80%);*/
        /*background:-o-radial-gradient(circle farthest-corner at bottom right, rgb(183, 88, 211) 11%, rgb(0, 255, 237) 80%);*/
        /*background:-moz-radial-gradient(circle farthest-corner at bottom right, rgb(183, 88, 211) 11%, rgb(0, 255, 237) 80%);*/
        background:radial-gradient(circle farthest-corner at top left, rgb(183, 88, 211) 30%, rgb(0, 255, 237) 80%);
    }

    .image-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .image {
            max-width: 280px;
        }
    }

    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        text-shadow: 5px 5px #9575CD, 8px 8px rgba(0, 0, 0, .2);
        font-size: 2.5em;
        margin: 0;
        color: floralwhite;
        text-align: center;
    }

    h2 {
        font-size: 1.5em;
        margin: 0 35px;
        text-align: -webkit-center;
        margin-top: -10px;
        color: #ff6fa0;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

        &:before, &:after {
            content: ' ';
            position: absolute;
            border-top: 2px solid white;
            top: 12px;
        }

        &:nth-of-type(1):before {
            width: 25%;
            height: 4px;
            margin: 3% 0 0 -27%;
        }

        &:nth-of-type(1):after {
            width: 25%;
            height: 4px;
            margin: 3% 0 0 5px;
        }
    }

    h1, h2 {
        transform: matrix(1.00, -0.25, 0.00, 1.00, 0, 0);
        -ms-transform: matrix(1.00, -0.25, 0.00, 1.00, 0, 0);
        -webkit-transform: matrix(1.00, -0.25, 0.00, 1.00, 0, 0);
        text-transform: uppercase;
    }
</style>
