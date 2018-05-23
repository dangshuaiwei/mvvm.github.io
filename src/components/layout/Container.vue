<template>
  	<div class="content">
  		<div class="contentLeft">
  			<articleList></articleList>
  		</div>
  		<div class="contentRight">
            <self></self>  
            <leaveMessage></leaveMessage>
            <tags></tags>
      </div>
  	</div>
</template>

<script>
import articleList from '@/components/layout/articleList' 
import self from '@/components/layout/self' 
import leaveMessage from '@/components/layout/leaveMessage' 
import tags from '@/components/layout/tags' 
export default {
  	data () {
	    return {
	    }
  	},
  	components: {
  		articleList,
        self,
        leaveMessage,
        tags
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
}
@media (max-width: 1000px){
    .contentLeft{
        width: 100%!important;
    }
}
.contentLeft{
	width: 67%;
	float: left;
	margin-top: -90px;
	transition: all .5s ease-out;
}
.contentRight{
	width: 30%;
	float: right;
}
.contentLeft>div{
	padding: 20px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 16px 24px 1px rgba(0,0,0,.14), 0 6px 50px 1px rgba(0,0,0,.12), 0 6px 10px -5px rgba(0,0,0,.2);
}
</style>
