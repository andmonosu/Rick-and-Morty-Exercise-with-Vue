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

export default {
  name: "SideBar",
  components: { FilterList, FiltersSelect },
  methods:{
    search(event){
      this.$emit('searchInput',event.target.value);
    },
    genderSelected(event){
      this.$emit('genderSelected',event);
    },
    statusSelected(event){
      this.$emit('statusSelected',event);
    }
  },
  data(){
    return{
      genderTitle: "Gender",
      statusTitle: "Status",
    }
  },
  props:{
    characters:Array,
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
    }
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