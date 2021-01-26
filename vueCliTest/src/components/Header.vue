<template>
  <div id="header">
    <header>
      <h3>{{ name }}</h3>
      <h3>{{ age }}</h3>
      <button @click="changeName">ChangeName</button>
      <div class="header-content">
        <app-main :name="name" @resetWasName="name = $event" :myAge="age"></app-main>
        <app-footer :myAge="age" @resetWasAge="age = $event"></app-footer>
      </div>
    </header>
  </div>
</template>

<script>
import Main from './Main'
import Footer from './Footer'
export default {
  data: function() {
    return {
      name: 'Tran Thinh',
      age: 18
    }
  },
  methods: {
    changeName: function() {
      this.name = 'I not Vietnamese' 
    }
  },
  components: {
    appMain: Main,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
 @import "../assets/scss/menu-page.scss";
 .header-content {
   display: flex;
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