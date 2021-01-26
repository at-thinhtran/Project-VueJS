import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('resetWasAge', age)
    }
  }
});
// import MenuPage from './menu-page/menu-page.vue' 

// Vue.component('menu-component', MenuPage) 

// var data = {
//   test: 'Hello component vuejs!'
// }

// Vue.component('menu-tab', {
//    data: function() {
//      return {
//       test: 'Hello component vuejs!'
//      }
//    },
//    template: '<h1>Ai said: {{this.test}} <br> <button @click="changeTest">Change it</button></h1>',
//    methods: {
//     changeTest: function() {
//        this.test= 'Share!'
//      }
//    }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})

