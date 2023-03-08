<template>
  <div>
    <button v-if="info.prev !==null&&info!==''" v-on:click="sendQuery" v-bind:value="info.prev" >
      Previous Page
    </button>
    <button v-if="info.next!==null&&info!==''" v-on:click="sendQuery" v-bind:value="info.next">
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
      this.$emit('sendQuery',event.target.value);
    }
  },emits:{
    sendQuery:null
  }
};
</script>

<style scoped>

</style>