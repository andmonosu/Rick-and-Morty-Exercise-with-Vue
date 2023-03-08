<template>
  <aside class="sideBar">
    <input type="text" placeholder="Search by character name" v-on:input="search">
    <FilterList>
      <FiltersSelect :title="genderTitle" :filters="genderFilters" v-on:filterSelected="genderSelected"></FiltersSelect>
      <FiltersSelect :title="statusTitle" :filters="statusFilters" v-on:filterSelected="statusSelected"></FiltersSelect>
      <FilterCheckBox :title="genderTitle" :filters="genderFilters" v-on:filterChecked="genderChecked"></FilterCheckBox>
      <FilterCheckBox :title="statusTitle" :filters="statusFilters" v-on:filterChecked="statusChecked"></FilterCheckBox>
    </FilterList>
  </aside>

</template>

<script>
import FiltersSelect from "@/components/FiltersSelect.vue";
import FilterCheckBox from "@/components/FilterCheckBox.vue";
import FilterList from "@/components/FilterList.vue";

export default {
  name: "SideBar",
  components: { FilterList, FilterCheckBox, FiltersSelect },
  methods:{
    search(event){
      this.$emit('searchInput',event.target.value);
    },
    genderSelected(event){
      this.$emit('genderSelected',event);
    },
    statusSelected(event){
      this.$emit('statusSelected',event);
    },
    genderChecked(event){
      this.$emit('genderChecked',event);
    },
    statusChecked(event){
      this.$emit('statusChecked',event);
    },
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
}

</style>