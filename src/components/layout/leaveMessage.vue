<template>
  	<div>
  		<p class="messageTitle">留言</p>
  		<ul class="messageList">
  			<li v-for="item in messages">
  				<a href="javascript:void(0)">
  					<div class="headerImg">
  						<img :src="item.headerImg" alt="">
  					</div>
  					<div class="messagesCon">
  						<h5>{{item.name}}</h5>
  						<p>{{item.content}}</p>
  					</div>
  				</a>
  			</li>
  		</ul>
  	</div>
</template>

<script>
export default {
  	data () {
	    return {
	    	messages: [
	    		{
	    			name: '给你个赞',
	    			content: '六六六',
	    			headerImg: '/static/images/headImg.png'
	    		},
	    		{
	    			name: '上海赵本山',
	    			content: '交流一下',
	    			headerImg: '/static/images/headImg.png'
	    		},
	    		{
	    			name: '上海赵本山',
	    			content: '交流一下',
	    			headerImg: '/static/images/headImg.png'
	    		},
	    		{
	    			name: '上海赵本山',
	    			content: '交流一下',
	    			headerImg: '/static/images/headImg.png'
	    		}
	    	]
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messageTitle{
	border-bottom: 2px solid hsla(0,0%,55%,.5);
    padding: 0 10px;
    color: #8b8b8b;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    margin-top: 30px;
}
.messageList li{
	border-bottom: 1px dashed hsla(0,0%,55%,.4);
}
.messageList li a{
	height: 45px;
	padding: 8px 8px 0 8px;
	display: flex;
	flex-wrap: wrap;  
	justify-content: flex-start;  
	color: #778087;
}
.messageList li .headerImg{
	margin-right: 8px;
}
.messageList li img{
	width: 38px;
	height: 38px;
}
.messagesCon h5{
    line-height: 17px;
	color: #778087;
    line-height: 17px;
    font-weight: 700;
    padding: 1px 0 0;
    font-size: 14px;
}
.messagesCon p{
    line-height: 17px;
    font-weight: 400;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    margin-top: 3px;
}
</style>
