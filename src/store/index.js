import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allArticles: [],
		showArticles: [],
		tags: [],
		selectedTag: [],
		detialStyle: false
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
		getSelectedArticles (state,selectedTag) {
			state.selectedTag = selectedTag;
		},
		clickDetial1 (state) {
			state.detialStyle = true;
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
		clickDetial1 (context) {
			context.commit('clickDetial1')
		},
		selectTag ({ state, commit }, tag) {
			if (tag) {
				const tagArticles = state.allArticles.filter(({ tags }) => {
			  		return tags.includes(tag)
				})
				commit('showArticles', tagArticles)
				commit('selectedTag', tag)
			} else {
				commit('showArticles', state.allArticles)
				commit('selectedTag', 'all')
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
			return state.detialStyle;
		}
	}
})

export default store