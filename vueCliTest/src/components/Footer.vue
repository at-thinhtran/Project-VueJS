<template>
  <div class="footer">
      <footer>
        <p>Footer content</p>
        <p>My Age: {{ myAge }}</p>
        <button @click="editAge">Chang Age</button>
      </footer>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    myAge: Number
  },
  methods: {
    editAge() {
      this.myAge = 30;
      // this.$emit('resetWasAge', this.myAge)
      // eventBus.$emit('resetWasAge', this.myAge)
      eventBus.changeAge(this.myAge);
    }
  }
}
</script>

<style lang="scss">
.footer {
  border: solid;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
