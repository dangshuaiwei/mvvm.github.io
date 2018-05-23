<template>
  	<div>
  		<div v-for="(item,key) in showArticles" :key="key" class="everyArticle">
  			<h2 class="title">{{item.title}}</h2>
	  		<p class="articleTime">{{item.date}}</p>
	  		<div class="leftIcon">
	  			<a href="javascript:void(0)" v-for="tag in item.tags">{{tag}}</a>
	  		</div>
	  		<div class="articleCon">
	  			<h3 class="conTitle">{{item.desc}}</h3>
				<p class="des"></p>
	  		</div>
            <!-- <router-link :to="`/${showArticles[key].name.replace(/\.md/, '')}`" @click="clickDetial1" class="more">阅读更多</router-link> -->
	  		<a href="javascript:void(0)" class="more" @click="clickDetial1();$router.push(`/${showArticles[key].name.replace(/\.md/, '')}`)">阅读更多</a>
  		</div>
  	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  	data () {
	    return {
            
	    }
  	},
  	mounted () {
        this.$store.dispatch('getAllArticles'); 
    },
    methods: {
        ...mapActions([
            'clickDetial1'
        ])
    }, 
    computed: {
        ...mapGetters([
            'showArticles'
        ]),
        ...mapGetters([
            'clickDetial'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
	padding: 0.1em 80px 0;
	color: #363636;
	position: relative;
}
.everyArticle{
	padding: 15px;
	border-bottom: 1px solid #e0e0e0;
	position: relative;
}
.articleCon{
    margin: 20px 0;
}
.time{
	font-size: 14px;
	color: #555;line-height: 20px;
}
.leftIcon{
	width: 54px;
	height: 34px;
	border-color: #47456d;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    background-color: #97dffd;
    color: #fff;
    position: relative;
    left: -50px;
}
.leftIcon a{
	color: #fff;
}
.leftIcon:after{
	position: absolute;
    content: "";
    top: 100%;
    left: 0;
    border-top: 0 solid transparent;
    border-right-width: 1em;
    border-right-color: inherit;
    border-right-style: solid;
    border-bottom: 1em solid transparent;
    border-left: 0 solid transparent;
    width: 0;
    height: 0;
}
.more{
    background-color: #96e1fc;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>
