<template>
  	<div class="container">
  		<ul class="navList">
  			<li v-for="item in nav">
  				<router-link :to="item.path" :method="[item.hoverMethod ? 'hoverMethod' : '']"><span class="iconfont" :class="item.iconClass"></span>{{item.name}}</router-link>
  				<ul v-if="item.hoverMethod" class="classfication">
  					<li v-for="val in tags">
  						<a href="javascript:void(0)" @click="selectTag(val)">{{val}}</a>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  	data () {
	    return {
	    	nav: [
	    		{
	    			name: '首页',
	    			path: '/',
	    			hoverMethod: false,
	    			iconClass: 'icon-shouye'
	    		},
	    		{
	    			name: '分类',
	    			path: '/',
	    			hoverMethod: true,
	    			classfication: ['杂谈','Scss','js'],
	    			iconClass: 'icon-fenleigongnengleimu'
	    		},
	    		{
	    			name: '留言',
	    			path: '/LeavingMessage',
	    			hoverMethod: false,
	    			iconClass: 'icon-liuyanbeizhu'
	    		},
	    		{
	    			name: '关于',
	    			path: '/About',
	    			hoverMethod: false,
	    			iconClass: 'icon-guanyuwo'
	    		}
	    	]
	    }
  	},
  	computed: {
  		...mapGetters([
            'tags'
        ]),
        ...mapGetters([
            'selectedTag'
        ]),
  	},
  	methods: {
  		selectTag (tag) {
	      	this.$store.dispatch('selectTag', tag)
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
	max-width: 80%;
	margin: 0 auto;
}
.container .navList{
	height: 38px;
}
.container .navList li{
	float: left;
	height: 38px;
	line-height: 38px;
	position: relative;
}
.container .navList li:hover{
	background-color: hsla(0,0%,69%,.2);
}
.container .navList li:nth-child(2):hover .classfication{
	display: block;
}
.container .navList1 li:hover {
    background-color: rgba(175, 175, 175, 0.2);
    color: #fff;
}
.container .navList li a{
	display: inline-block;
	padding: 0 12px;
	color: #fff;
	font-size: 14px;
}
.container .navList li a span{
	display: inline-block;
	width: 14px;
	height: 14px;
	font-size: 14px;
	margin-right: 2px;
}
.container .navList li a:active{
	color: #fff;
}
.classfication{
	position: absolute;
	top: 38px;
	left: 0;
	box-shadow: 0 2px 4px rgba(0,0,0,.16);
	border: 1px solid #e5e9ef;
	display: none;
	z-index: 999;
	background-color: #fff;
}
.classfication a{
	display: inline-block;
	width: 100px;
	padding: 14px 12px;
	color: #222 !important;
	text-align: left;
	background-color: hsla(0,0%,69%,.2);
}
</style>
