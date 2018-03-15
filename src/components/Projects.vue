<template>
    <section id="projects">
        <p class="section-header"><span class="accent">Pro</span>jects</p>
        <b-container class="data-container" fluid>
            <b-row class="justify-content-md-center">
                <b-col md="6" v-for="item in projects" :key="item.id">
                    <project
                        v-bind:project="item">
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
                },
                {
                    id: 1, 
                    title: 'Meet Articles', 
                    description: 'Project Manager', 
                    img: require('../assets/img/meet-articles.jpg'),
                    link: 'https://meetarticles.me/'
                },
                {
                    id: 2, 
                    title: 'Inspiry', 
                    description: 'Python developer', 
                    img: require('../assets/img/inspiry.jpg'),
                    link: 'https://github.com/mashaka/Inspiry'
                },
                {
                    id: 3, 
                    title: 'Jules Verne', 
                    description: 'Project Manager', 
                    img: require('../assets/img/jules-verne.jpg'),
                    link: 'http://julesvernetrilogy.com/'
                }
            ]
        };
    },
    components: {
        project: Project
    }
}
</script>
  
<style lang="scss">
#projects {
    background-color: const('COLOR_NEUTRAL_1');

    .data-container {
        max-width: 820px;
    }
}
</style>