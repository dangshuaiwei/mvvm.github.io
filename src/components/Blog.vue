<template>
  	<div>
  		<div class="header"><Header></Header></div>
  		<div class="headerPic">
  			<h1>binggo</h1>
  		</div>
  	</div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  	data () {
	    return {
	    }
  	},
  	components: {
  		Header
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
.headerPic{
	height: 280px;
	background: url(/static/images/xiyang.gif) center -52px no-repeat;
    background-size: cover;
    position: relative;
}
</style>
