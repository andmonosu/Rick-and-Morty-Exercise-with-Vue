<template>
  <aside class="sideBar">
    <input type="text" placeholder="Search by character name" v-on:input="search">
    <FilterList>
      <FiltersSelect :title="genderTitle" :filters="genderFilters" v-on:filterSelected="genderSelected"></FiltersSelect>
      <FiltersSelect :title="statusTitle" :filters="statusFilters" v-on:filterSelected="statusSelected"></FiltersSelect>
    </FilterList>
  </aside>

</template>

<script>
import FiltersSelect from "@/components/FiltersSelect.vue";
import FilterList from "@/components/FilterList.vue";
import { mapState } from "vuex";

export default {
  name: "SideBar",
  components: { FilterList, FiltersSelect },
  methods:{
    search(event){
      this.$store.commit('setName',event.target.value)
      this.$store.dispatch('changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`)
      this.$store.commit('setCharacterWithoutFiltering')
    },
    genderSelected(event){
      this.$store.commit('setGender',event);
      this.$store.dispatch('changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`)
    },
    statusSelected(event){
      this.$store.commit('setStatus',event);
      this.$store.dispatch('changeQueryAndSearch',`https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}&gender=${this.gender}`)
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
    },...mapState({
      characters:"charactersWithoutFiltering",
      name:"name",
      gender:"gender",
      status:"status"
  })
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

</style>