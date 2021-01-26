<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectionComponent = 'appCard'">Card</button>
          <button class="btn btn-outline-danger" @click="selectionComponent = 'appAbout'">About</button>
          <button class="btn btn-outline-danger" @click="selectionComponent = 'appContact'">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <app-card cardWord="Car">
            <h2 slot="title">Hello world!!!</h2>
            <p slot="content">asdasdasdasd</p>
          </app-card>
          <!-- <div><p>{{selectionComponent}}</p></div> -->
          <keep-alive>
            <component :is="selectionComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import About from './components/About'
import Contact from './components/Contact'
export default {
  name: 'app',
  data () {
    return {
      selectionComponent: 'appCard'
    }
  },
  components: {
    appCard: Card,
    appAbout: About,
    appContact: Contact
  }
}
</script>

<style lang="scss">
</style>
