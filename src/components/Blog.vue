<template>
  	<div>
  		<transition name="headerFade">
            <div class="header" v-show="headerShow"><Header></Header></div>
        </transition>
        <div class="headerPic">
            <h1>Chunibyo</h1>
        </div>
        <div class="view">
            <router-view></router-view>
        </div>
        <div class="backTop"><backTop :scrollTop = "scrollTop" v-show="backTopShow"></backTop></div>
  	</div>
    
</template>

<script>
import Header from '@/components/layout/Header'
import backTop from '@/components/layout/backTop'
import {mapGetters} from 'vuex'
export default {
    name: 'App',
    data () {
        return {
            headerShow: true,
            scrollTop: 0,
            backTopShow: false
        }
    },
    components: {
        Header,
        backTop   
    },
    mounted () {
        // const that = this;箭头函数的this是在函数声明的时候定义的
        let setTimeoutScroll = 0;
        window.addEventListener('scroll',(e) => {
            const bodyScroll = document.body.scrollTop || document.documentElement.scrollTop;
            this.scrollTop = bodyScroll;
            if(setTimeoutScroll > this.scrollTop){
                this.headerShow = true;
            }else{
                this.headerShow = false;
            }
            // this.headerShow = bodyScroll > 0 ? false : true;
            this.backTopShow = bodyScroll > 100 ? true : false;
            setTimeout(() => {
                setTimeoutScroll = this.scrollTop;
            },0)
        })
    },
    computed: {
        ...mapGetters([
            'clickDetial'
        ])
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
