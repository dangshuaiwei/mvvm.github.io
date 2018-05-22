<template>
  	<div @click="backTop(scrollTop)"></div>
</template>

<script>
export default {
	props: ['scrollTop'],
  	data () {
	    return {
	    }
  	},
  	methods: {
  		backTop (scrollTop) {
  			const that = this;
  			const timer = setInterval(() => {
  				// scrollTop -= 30;
  				scrollTop = scrollTop - scrollTop/10;
  				if(scrollTop <= 10){
  					that.setTop(0);
	  				clearInterval(timer);
	  			}
  				that.setTop(scrollTop);
  			},12)
  		},
  		setTop (scrollTop) {
  			if(document.documentElement.scrollTop){
				document.documentElement.scrollTop = scrollTop; 
			}else{
				document.body.scrollTop = scrollTop;
			}
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
	width: 50px;
	height: 50px;
	background-color: lightblue;
}
</style>
