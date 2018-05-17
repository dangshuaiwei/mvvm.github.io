<template>
  	<div>
  		<div v-for="item in articleList" class="everyArticle">
  			<h2 class="title">{{item.title}}</h2>
	  		<p class="articleTime">12:00</p>
	  		<div class="leftIcon">
	  			<a href="javascript:void(0)">js</a>
	  		</div>
	  		<div class="articleCon">
	  			<h3 class="conTitle">item.des</h3>
				<p class="des"></p>
	  		</div>
	  		<a href="javascript:void(0)" class="more">阅读更多</a>
  		</div>
  	</div>
</template>

<script>
export default {
  	data () {
	    return {
	    }
  	},
  	computed: {
  		articleList () {
  			return this.$store.state.article;
  		}
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
</style>
