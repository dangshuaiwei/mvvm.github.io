<template>
  	<div>
  	    <articleList></articleList>
  	</div>
</template>

<script>
import articleList from '@/components/layout/articleList'
export default {
    components: {
        articleList
    },
  	data () {
	    return {

	    }
  	},
  	computed: {
  		msg () {
  			return this.$store.state.article;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
