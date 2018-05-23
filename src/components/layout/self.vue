<template>
  	<div>
  		<h3>明的我几年前</h3>
  		<p class="bio">Just do it</p>
  		<div class="contact">
  			<div class="img">
  				<a href="javascript:void(0)"><img src="/static/images/img.jpg"></a>
  			</div>
  			<div class="link">
  				<a href=""><i class="iconfont icon-tubiao214"></i></a>
  				<a href=""><i class="iconfont icon-github"></i></a>
  				<a href=""><i class="iconfont icon-mail"></i></a>
  				<a href=""><i class="iconfont icon-mingpian"></i></a>
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
	margin: 7px;
}
.contact .link a i{
    display: inline-block;
    font-size: 22px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
}
.contact .link a:first-child i{
    background-color: rgb(221, 75, 57);
}
.contact .link a:nth-child(2) i{
    background-color: rgb(85, 172, 238);
}
.contact .link a:nth-child(3) i{
    background-color: rgb(59, 89, 152);
}
.contact .link a:nth-child(4) i{
    background-color: rgb(128, 185, 83);
}
</style>
