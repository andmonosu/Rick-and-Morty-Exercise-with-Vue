<template>
  <Transition>
    <article class="card">
      <img alt="Character Image" v-bind:src="character.image" class="card-image">
      <p class="card-gender">{{ character.gender }}</p>
      <p class="card-specie">{{ character.species }}</p>
      <p class="card-status" v-bind:class="character.status">{{ character.status }}</p>
    </article>
  </Transition>
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
    grid-column-gap: 1rem;
    width: fit-content;
    text-align: center;
    align-items: center;
    border-radius: 0.5rem;
    border-style: solid;
    background-color: lightgray;
    box-shadow: 10px 5px 5px lightgray;
    padding: 0.5rem;
  }

  .card-image{
    grid-area:card-image;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .card-image img{
    object-fit: cover;
    width: auto;
    height: auto;
  }

  .card-specie{
    grid-area: card-specie;
    border-radius: 0.5rem;
    box-shadow: inset -10px -5px 5px darkgrey;
  }

  .card-gender{
    grid-area: card-gender;
    border-radius: 0.5rem;
    box-shadow: inset -10px -5px 5px darkgrey;
  }

  .card-status{
    grid-area: card-status;
    margin-left:2rem;
    margin-right:2rem;
    border-radius: 0.5rem;
  }

  .Alive{
    background-color: green;
    box-shadow: inset -10px -5px 5px darkgreen;
  }

  .Dead{
    background-color:red;
    box-shadow: inset -10px -5px 5px darkred;
  }

  .unknown{
    background-color:darkgrey;
    box-shadow: inset -10px -5px 5px grey;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>