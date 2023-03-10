import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './assets/main.css'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      characters:[],
      query:"",
      info:"",
    }
  },
  mutations: {
    setCharacters(characters, searchResult){
      characters = searchResult;
    },setQuery(query,newQuery){
      query=newQuery;
    },setInfo(info, newInfo){
      info = newInfo;
    }
  },actions:{
    searchCharacters({state,commit}){
      fetch(state('query')).then(res => res.json()).then(results=>{
        commit('setCharacters',results.results);
        commit('setInfo',results.info);
      })
    }
  }
})


createApp(App).mount('#app');
App.use(store);