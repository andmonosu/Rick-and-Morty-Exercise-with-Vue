<template>
    <div class="container">

    <slot></slot>
    </div>
</template>
<script>

export default {
  name: "CardContainer",
};
</script>

<style scoped>
  .container{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    align-items: center;
    justify-content: center;
    margin: 3rem;
  }

  @media only screen and (max-width: 800px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      grid-template-columns: auto;
    }
  }

</style>