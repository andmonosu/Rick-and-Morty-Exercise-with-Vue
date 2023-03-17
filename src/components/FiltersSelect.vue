<template>
  <h1>{{ title }}</h1>
  <select v-bind:name="title" v-on:change="filterSelected" id="select">
    <option value="">None</option>
    <option v-for="filter in filters" v-bind:value="filter">{{ filter }}</option>
  </select>
</template>

<script lang="ts">

export default {
  name: "FiltersSelect",
  props:{
    title:String,
    filters:Set,
  },
  methods:{
    filterSelected(event){
      this.$emit('filterSelected',event.target.value);
    }
  },
};
</script>

<style scoped>

</style>