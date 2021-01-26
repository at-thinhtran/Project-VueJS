<template>
    <div class="sadasd">
        <h2>{{ cardWord}}</h2>
        <p>This is my car!</p>
        <div class="title"> 
          <slot name="title"></slot>
        </div>
        <div class="content"> 
          <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
  export default {
      props: ['cardWord']
  }
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    padding: 30px;
    margin: 20px auto;
    text-align: center;
  }
  .title {
    text-align: inherit;
  }
</style>
