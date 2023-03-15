<template>
  <div>
    <button v-if="info.prev !==null&&info!==''" v-on:click="sendQuery" v-bind:value="info.prev" class="button-changePage">
      Previous Page
    </button>
    <button v-if="info.next!==null&&info!==''" v-on:click="sendQuery" v-bind:value="info.next" class="button-changePage">
      Next Page
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonContainer",
  props:{
    info:Object,
  },methods:{
    sendQuery(event){
      this.$store.dispatch('search/changeQueryAndSearch',event.target.value)
    }
  }
};
</script>

<style scoped>
.button-changePage{
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: lightgray;
  color: black;
  font-family: monospace;
}

.button-changePage:hover{
  background-color: grey;
  color: white;
}

.button-changePage:focus{
  box-shadow: inset 10px 5px 5px darkgrey;
}
</style>