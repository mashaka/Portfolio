<template>
  <div id="app" ref="content">
    <navbar></navbar>
    <hello></hello>
    <projects></projects>
    <experience></experience>
    <hackathons></hackathons>
    <contacts></contacts>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Hello from './Hello.vue'
import Projects from './Projects.vue'
import Experience from './Experience.vue'
import Hackathons from './Hackathons.vue'
import Contacts from './Contacts.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar: Navbar,
    hello: Hello,
    projects: Projects,
    experience: Experience,
    hackathons: Hackathons,
    contacts: Contacts
  }
}
</script>

<style lang="scss">

body {
  position: relative;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

section {
  padding: 76px 20px 20px;
  height: 400px;

  h1 {
    text-align: left;
  }
}

</style>
