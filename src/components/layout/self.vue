<template>
  	<div>
  		<h3>明的我几年前</h3>
  		<p class="bio">Just do it</p>
  		<div class="contact">
  			<div class="img">
  				<a href="javascript:void(0)"><img src="/static/images/img.jpg"></a>
  			</div>
  			<div class="link">
  				<a href=""></a>
  				<a href=""></a>
  				<a href=""></a>
  				<a href=""></a>
  			</div>
  		</div>
  	</div>
</template>

<script>
export default {
  	data () {
	    return {
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bio{
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #999;
    text-align: left;
    padding-left: 50px;
}
.contact{
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
.contact div:first-child{
	width: 100;
	height: 100px;
	overflow: hidden;
}
.contact div:first-child:hover img{
	transform:scale(1.2);
}
.contact img{
	width: 100px;
	height: 100px;
	transition:all 1s;
}
.contact .link{
	overflow: hidden;
}
.contact .link a{
	display: inline-block;
	width: 38px;
	height: 38px;
	float: left;
	background: blue;
	margin: 7px;
}
</style>
