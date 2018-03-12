<template>
    <section id="projects" class="section">
        <h1 class="section-header"><span class="accent">Pro</span>jects</h1>
        <b-container fluid>
            <b-row>
                <b-col>
                    <project
                        v-for="item in projects"
                        v-bind:project="item"
                        v-bind:key="item.id">
                    </project>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import Project from './Project.vue'

export default {
  name: 'projects',
  data () {
    return {
        projects: [
            {
                id: 0, 
                title: 'Color Genius', 
                description: 'Android • Machine Learning', 
                img: require('../assets/img/color-genius.jpg'),
                link: 'https://chloe.machineheads.co/'
            }
        ]
    }
  },
  components: {
    project: Project
  }
}
</script>
  
<style lang="scss">
    #projects {
        background-color: const('COLOR_NEUTRAL_1');
    }
</style>