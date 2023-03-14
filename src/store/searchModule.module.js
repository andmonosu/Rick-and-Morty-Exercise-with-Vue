export const searchModule={
  namespaced:true,
  state:{
    gender:"",
    status:"",
    query:"",
    info:"",
    name:"",
  },mutations: {
    setQuery(state,query){
      state.query=query;
    },setInfo(state,newInfo){
      state.info = newInfo;
    },setStatus(state,status){
      state.status=status;
    },setGender(state,gender){
      state.gender = gender;
    },setName(state,name){
      state.name = name;
    }
  },actions:{
    searchCharacters({ state,commit }){
      fetch(state.query).then(res => res.json()).then(results=>{
        if(results.error==="There is nothing here"){
          commit('characters/setCharacters',[],{root:true})
          commit("setInfo","")
        }else{
          commit('characters/setCharacters',results.results,{root:true})
          commit('setInfo',results.info)
        }
      })
    },changeQueryAndSearch({commit,dispatch},query){
      commit('setQuery',query);
      dispatch('searchCharacters');
    }
  }
}