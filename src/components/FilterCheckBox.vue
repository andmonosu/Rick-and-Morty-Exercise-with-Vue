<template>
  <h1>{{ title }}</h1>
  <section>
    <div class="filter-labels">
  <label v-for="filter in filters" v-bind:for="filter">{{ filter }}</label>
    </div>
    <div class="filter-checkbox">
  <input v-for="filter in filters" type="checkbox" v-bind:value="filter" v-bind:id="filter" v-on:change="filterChecked">
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterCheckBox",
  props:{
    title:String,
    filters:Set,
  },
  data(){
    return{
      filtersChecked:new Set(),
    }
  },
  methods:{
    filterChecked(event){
      const filterValue = event.target.value;
      if(this.filtersChecked.has(filterValue)){
        this.filtersChecked.delete(filterValue);
      }else{
        this.filtersChecked.add(filterValue);
      }
      this.$emit('filterChecked',this.filtersChecked);
    }
  },emits:{
    filterChecked:null,
  }
};
</script>

<style scoped>
  section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "labels checkbox"
    ;
  }

  .filter-checkbox{
    grid-area: checkbox;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

  }

  .filter-labels{
    grid-area: labels;
    display:flex;
    flex-direction: column;
  }
</style>