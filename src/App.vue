<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

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
section p:first-child{
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
/*顶部动效*/
.headerFade-enter-active, .headerFade-leave-active{
    transition: top 1s;
}
.headerFade-enter,.headerFade-leave-to{
    top: -38px;
}
.headerPic{
    height: 280px;
    background: url(/static/images/xiyang.gif) center -52px no-repeat;
    background-size: cover;
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
.view section{
    width: 67%;
    margin: 0 auto;
    margin-top: -90px;
    transition: all .5s ease-out;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
    box-shadow: 0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
    position: relative;
}
.backTop{
    position: fixed;
    right: 100px;
    bottom: 100px;
}
</style>
