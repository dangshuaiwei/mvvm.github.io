import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		allArticles: [],
		showArticles: [],
		tags: [],
		selectedTag: []
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
		}
	}
})

export default store