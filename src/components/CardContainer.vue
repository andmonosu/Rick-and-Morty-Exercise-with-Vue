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
  }
</style>