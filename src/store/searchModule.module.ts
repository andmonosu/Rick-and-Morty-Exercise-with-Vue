import { State } from "vue";
import { Dispatch, Commit } from "vuex";
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface State {
        gender:String,
        status:String,
        query:URL,
        info:String,
        name:String,
    }
    interface ComponentCustomProperties {
        $store: Store<State>|Store<Commit>|Store<Dispatch>
    }
}
export const searchModule={
    namespaced:true,
    state:{
        gender:"",
        status:"",
        query:"",
        info:"",
        name:"",
    },mutations: {
        setQuery(state:State,query:URL){
            state.query=query;
        },setInfo(state:State,newInfo:String){
            state.info = newInfo;
        },setStatus(state:State,status:String){
            state.status=status;
        },setGender(state:State,gender:String){
            state.gender = gender;
        },setName(state:State,name:String){
            state.name = name;
        }
    },actions:{
        searchCharacters({ state,commit }:{ state:State, commit:Commit}){
            fetch(state.query).then(res => res.json()).then(results=>{
                if(results.error==="There is nothing here"){
                    commit('characters/setCharacters',[],{root:true})
                    commit("setInfo","")
                }else{
                    commit('characters/setCharacters',results.results,{root:true})
                    commit('setInfo',results.info)
                }
            })
        },changeQueryAndSearch({commit,dispatch}:{commit:Commit,dispatch:Dispatch},query:String){
            commit('setQuery',query);
            dispatch('searchCharacters');
        }
    }
}