<template>
  <article class="card">
    <img alt="Character Image" v-bind:src="character.image" class="card-image">
    <p class="card-gender">{{ character.gender }}</p>
    <p class="card-specie">{{ character.species }}</p>
    <p class="card-status" v-bind:class="character.status">{{ character.status }}</p>
  </article>
</template>

<script>
export default {
  name: "Card",
  props:{
    character: Object,
  },

};
</script>

<style scoped>
  .card{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    grid-template-areas:
      "card-image card-image"
      "card-gender card-specie"
      "card-status card-status"
    ;
    width: fit-content;
    text-align: center;
  }

  .card-image{
    grid-area:card-image;
  }

  .card-specie{
    grid-area: card-specie;
  }

  .card-gender{
    grid-area: card-gender;
  }

  .card-status{
    grid-area: card-status;
  }

  .Alive{
    background-color: green;
  }

  .Dead{
    background-color:red;
  }

  .unknown{
    background-color:grey;
  }
</style>