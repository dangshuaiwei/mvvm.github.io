<template>
  	<div>
  		<h1>{{msg}}</h1>
  	</div>
</template>

<script>
export default {
  	data () {
	    return {

	    }
  	},
  	computed: {
  		msg () {
  			return this.$store.state.msg;
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
