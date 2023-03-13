import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './assets/main.css'

// Create a new store instance.
const store = createStore({
  state:{
    characters:[],
    query:"",
    info:"",
    name:"",
    gender:"",
    status:"",
    charactersWithoutFiltering:[]
  },
  mutations: {
    setCharacters(state,searchResult){
      state.characters = searchResult;
    },setQuery(state,query){
      state.query=query;
    },setInfo(state,newInfo){
      state.info = newInfo;
    },setStatus(state,status){
      state.status=status;
    },setGender(state,gender){
      state.gender = gender;
    },setName(state,name){
      state.name = name;
    },setCharacterWithoutFiltering(state){
      state.charactersWithoutFiltering = state.characters;
    }
  },actions:{
    searchCharacters({ state, commit }){
      fetch(state.query).then(res => res.json()).then(results=>{
        if(results.error==="There is nothing here"){
          commit('setCharacters',[])
          commit("setInfo","")
        }else{
          commit('setCharacters',results.results)
          commit('setInfo',results.info)
        }
      })
    },changeQueryAndSearch({commit,dispatch},query){
      commit('setQuery',query);
      dispatch('searchCharacters');
    }
  }
})


createApp(App).use(store).mount('#app')