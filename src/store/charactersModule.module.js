export const charactersModule={
  namespaced:true,
  state:{
    characters:[],
    charactersWithoutFiltering:[]
  },
  mutations: {
    setCharacters(state,searchResult){
      state.characters = searchResult;
    },setCharacterWithoutFiltering(state){
      state.charactersWithoutFiltering = state.characters;
    }
  }
}