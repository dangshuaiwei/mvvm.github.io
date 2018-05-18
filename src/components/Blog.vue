<template>
  	<div>
  		<div class="header"><Header></Header></div>
  		<div class="headerPic">
  			<h1>Chunibyo</h1>
  		</div>
        <div>
            <Container></Container>
        </div>
  	</div>
    
</template>

<script>
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
export default {
  	data () {
	    return {
	    }
  	},
  	components: {
  		Header,
        Container
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
