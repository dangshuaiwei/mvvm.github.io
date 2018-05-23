<template>
  	<div @click="backTop(scrollTop)">
        <i class="iconfont icon-arrow-down"></i>
    </div>
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
  			// const that = this;箭头函数的this是在函数声明的时候定义的
  			const timer = setInterval(() => {
  				// scrollTop -= 30;
  				scrollTop = scrollTop - scrollTop/10;
  				if(scrollTop <= 10){
  					this.setTop(0);
	  				clearInterval(timer);
	  			}
  				this.setTop(scrollTop);
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
    position: relative;
}
div i{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding: 10px;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    left: 50%;
    margin-left: -25px;
    color: rgb(113, 226, 241);
    font-size: 32px;
    background-color: hsla(0,7%,91%,.52);
    border-radius: 5px;
    transition: border-radius 0.5s;
}
.backTop:hover i{
    border-radius: 50%;
    background-color: rgb(113, 226, 241);
    color: #fff;
}
</style>
