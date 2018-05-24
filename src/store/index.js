import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allArticles: [],
		showArticles: [],
		tags: [],
		selectedTag: [],
		backUrl: 'javascript:void(0)'
	},
	mutations: {
		getAllArticles (state,allArticles) {
			state.allArticles = allArticles;
		},
		getShowArticles (state,showArticles) {
			state.showArticles = showArticles
		},
		getTags (state,tags) {
			state.tags = tags;
		},
		getSelectedTags (state,selectedTag) {
			state.selectedTag = selectedTag;
		},
		clickDetial (state) {
			state.backUrl = '/Blog';
		}
	},
	actions: {
		getAllArticles ({commit}) {
			const articles = require('~articles/articles.json')
			const articlesArr = Object.keys(articles).map((name) => {
				return {
					name: name,
					title: articles[name].title,
					tags: articles[name].tags,
					date: articles[name].date,
					cover: articles[name].cover,
					desc: articles[name].desc

				}
			})
			console.log(123)
			commit('getAllArticles', articlesArr)
      		commit('getShowArticles', articlesArr)
      		const tagsSet = new Set()
      		articlesArr.forEach(({ tags }) => {
        		tags.forEach((tag) => {
          		tagsSet.add(tag)
        		})
      		})
     		commit('getTags', [...tagsSet])
		},
		clickDetial (context) {
			context.commit('clickDetial')
		},
		selectTag ({ state, commit }, tag) {
			if (tag) {
				const tagArticles = state.allArticles.filter(({ tags }) => {
			  		return tags.includes(tag)
				})
				console.log(tagArticles)
				commit('getShowArticles', tagArticles)
				commit('getSelectedTags', tag)
			} else {
				commit('getShowArticles', state.allArticles)
				commit('getSelectedTags', 'all')
			}
	    }
	},
	getters: {
		showArticles (state) {
			return state.showArticles;
		},
		tags (state) {
			return state.tags;
		},
		selectedTag (state) {
			return state.tags;
		},
		clickDetial (state) {
			return state.backUrl;
		},
		nowTag (state) {
			return state.selectedTag;
		}
	}
})

export default store