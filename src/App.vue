<template>
    <div id="app">
        <div class="header"><Header></Header></div>
        <div class="headerPic">
            <h1>Chunibyo</h1>
        </div>
        <div class="ooo">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
    name: 'App',
    components: {
        Header    
    }
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,
h1,h2,h3,h4,h5,h6,pre,code,
form,fieldset,legend,input,
textarea,p,blockquote,th,td,button,span {
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
ul,li{
    list-style: none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
p:first-child{
    display: none;
}
.header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background: rgba(0,0,0,0.4);
}
.headerPic{
    height: 280px;
    background: url(/static/images/xiyang.gif) center -52px no-repeat;
    bac
    kground-size: cover;
    position: relative;
    overflow: hidden;
    margin-bottom: 38px;
}
.headerPic h1{
    max-width: 1100px;
    padding: 0 100px;
    text-align: left;
    color: #fff;
    font-family: Geo,sans-serif;
    font-size: 66px;
    margin: 0 auto;
    margin-top: 100px;
}
</style>
