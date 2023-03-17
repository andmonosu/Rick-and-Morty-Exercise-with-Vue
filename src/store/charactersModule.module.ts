import { Commit, Store, Dispatch } from "vuex";
import { State } from "vue";

declare module '@vue/runtime-core' {
    interface State {
        characters:Map<String,String>,
        charactersWithoutFiltering:Map<String,String>
    }
    interface ComponentCustomProperties {
        $store:Store<State>|Store<Commit>|Store<Dispatch>

    }
}

export const charactersModule={
    namespaced:true,
    state:{
        characters:[],
        charactersWithoutFiltering:[]
    },
    mutations: {
        setCharacters(state:State,searchResult:Map<String,String>){
            state.characters = searchResult;
        },setCharacterWithoutFiltering(state:State){
            state.charactersWithoutFiltering = state.characters;
        }
    }
}