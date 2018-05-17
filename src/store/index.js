import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		article: [
			{
				title: 'jQuery源码分析',
				des: 'jQuery最基本的构成结构：'
			},
			{
				title: 'css垂直居中总结',
				des: '子元素垂直居中的两种实现，效果叠加实现标签效果。'
			},
			{
				title: '自定义滚动条样式',
				des: 'webkit支持拥有overflow属性的区域，列表框，下拉菜单，textarea的滚动条自定义样式'
			}
		]
	}
})

export default store