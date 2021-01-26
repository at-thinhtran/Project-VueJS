<template>
    <div>
        <h1>This is About page!</h1>
        <button @click="counter++">Counter</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
  export default {
      data() {
        return {
            counter: 0
        }
      }
  }
</script>

<style lang="scss" scoped>
</style>
