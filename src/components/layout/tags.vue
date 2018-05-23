<template>
  	<div>
  		<p class="messageTitle">标签</p>
  		<ul>
  			<li v-for="item in tags">
  				<a href="javascript:void(0)" @click="selectTag(item)">{{item}}</a>
  			</li>
  		</ul>
  	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  	data () {
	    return {
	    }
  	},
  	computed: {
  		...mapGetters([
            'tags'
        ])
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
ul{
	display: flex;
	flex-wrap: wrap;  
	justify-content: flex-start;
}
ul li a{
	display: inline-block;
	margin: 16px 16px 16px 0;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    max-width: 100%;
    background: rgba(0,0,0,.06);
    color: #666768;
    border-radius: 15px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
