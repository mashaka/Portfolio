<template>
    <div id="app" ref="content">
        <navbar></navbar>
        <hello></hello>
        <projects></projects>
        <experience></experience>
        <hackathons></hackathons>
        <contacts></contacts>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Hello from './Hello.vue'
import Projects from './Projects.vue'
import Experience from './Experience.vue'
import Hackathons from './Hackathons.vue'
import Contacts from './Contacts.vue'
import Footer from './Footer.vue'

export default {
    name: 'app',
    data () {
        return {};
    },
    components: {
        navbar: Navbar,
        hello: Hello,
        projects: Projects,
        experience: Experience,
        hackathons: Hackathons,
        contacts: Contacts,
        footerComponent: Footer
    }
}
</script>

<style lang="scss">
body {
    position: relative;
    margin: 0;
}

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

section {
    padding: 76px 20px 40px 20px;

    .data-container {
        max-width: 1100px;
    }
}

.section-header {
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 500;
}

.accent {
    color: const('COLOR_ACCENT');
}
</style>
