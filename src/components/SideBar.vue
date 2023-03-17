<template>
  <aside class="sideBar">
    <div class="search">
      <input type="text" placeholder="Search by character name" v-on:input="search" class="search-bar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png" alt="search-icon" class="search-icon"/>
    </div>
    <FilterList>
      <FiltersSelect :title="genderTitle" :filters="genderFilters" v-on:filterSelected="genderSelected"></FiltersSelect>
      <FiltersSelect :title="statusTitle" :filters="statusFilters" v-on:filterSelected="statusSelected"></FiltersSelect>
    </FilterList>
  </aside>

</template>

<script lang="ts">
import FiltersSelect from "./FiltersSelect.vue";
import FilterList from "./FilterList.vue";
import { mapState } from "vuex";

export default {
  name: "SideBar",
  components: { FilterList, FiltersSelect },
  methods:{
    search(event){
      this.$store.commit('search/setName',event.target.value)
      this.$store.dispatch('search/changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}`+(this.status===""?"":`&status=${this.status}`)+(this.gender===""?"":`&gender=${this.gender}`))
      this.$store.commit('characters/setCharacterWithoutFiltering')
    },
    genderSelected(event){
      this.$store.commit('search/setGender',event);
      this.$store.dispatch('search/changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}`+(this.status===""?"":`&status=${this.status}`)+(this.gender===""?"":`&gender=${this.gender}`))
    },
    statusSelected(event){
      this.$store.commit('search/setStatus',event);
      this.$store.dispatch('search/changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}`+(this.status===""?"":`&status=${this.status}`)+(this.gender===""?"":`&gender=${this.gender}`))
    }
  },
  data(){
    return{
      genderTitle: "Gender",
      statusTitle: "Status",
    }
  },computed:{
    genderFilters(){
      let filters = new Set();
      this.characters.map(character => filters.add(character.gender));
      return filters;
    },
    statusFilters(){
      let filters = new Set();
      this.characters.map(character => filters.add(character.status));
      return filters;
    },...mapState('characters', {
      characters: "charactersWithoutFiltering",
    }),...mapState('search',{
      name:"name",
      gender:"gender",
      status:"status"
    }),
  }
};

</script>

<style scoped>

.sideBar{
  display:flex;
  flex-direction: column;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border-style: solid;
  background-color: lightgray;
  box-shadow: 10px 5px 5px lightgray;
  height: 98%;
  width: 80%;
  padding:1.5rem;
}

.search{
  display: flex;
  align-items: flex-end;
  justify-items: center;
}

.search-bar{
  border-radius: 0.75rem;
  padding-left: 0.5rem;
  margin-right: -1.5rem;
  width: 100%;
  height: 1.5rem;
  font-family: monospace;
}

.search-bar:focus{
  outline: none !important;
  border-color: darkgrey;
  box-shadow: 0 0 5px black;
}

.search-icon{
  width: 1rem;
  height: auto;
  padding-bottom: 0.35rem;

}


</style>