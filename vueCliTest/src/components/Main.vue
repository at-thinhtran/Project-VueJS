<template>
  <div class="main">
      <main>
        <p>Main content</p>
        <!-- <img src="../assets/logo.png" alt=""> -->
        <div>
            <h3>Information</h3>
            <p>My name: {{ name }}</p>
            <p>My Age: {{ myAge }}</p>
            <button @click="resetName">Reset Name</button>
            <!-- <button @click="resetNameFn">Reset case: callBack</button> -->
        </div>
      </main>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    // props: ['name'],
    props: {
        name: {
            type: Object,
            default: 'Tran Thinh'
        },
        // resetNameFn: Function,
        myAge: Number
    },
    methods: {
        reverseName() {
            return this.name.split("").reverse().join("")
        },
        resetName() {
            this.name = 'Hello CEO!';
            this.$emit('resetWasName', this.name);
            // eventBus.$emit('resetWasName', this.name)
        }
    },
    created() {
        eventBus.$on('resetWasAge', (age) => {
            this.myAge = age;
        })
    }
}
</script>

<style lang="scss">
.main {
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
