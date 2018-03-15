<template>
    <section id="experience">
        <b-container class="data-container" fluid>
            <b-row class="justify-content-md-center">
                <b-col md="6">
                    <p class="section-header"><span class="accent">Exp</span>erience</p>
                    <experienceItem 
                        v-for="item in work"
                        v-bind:experienceItem="item"
                        v-bind:key="item.id">
                    </experienceItem>
                </b-col>

                <b-col md="6">
                    <p class="section-header"><span class="accent">Edu</span>cation</p>
                    <experienceItem 
                        v-for="item in education"
                        v-bind:experienceItem="item"
                        v-bind:key="item.id">
                    </experienceItem>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>
    
<script>
import ExperienceItem from './ExperienceItem.vue'

export default {
  name: 'experience_and_education',
  data () {
    return {
        work: [
            {
                id: 0, 
                title: 'Software Engineer at ABBYY', 
                dates: 'Jan. 2016 – Sep. 2017',
                role: 'C++ • Python • Machine Learning',
                img: require('../assets/img/ABBYY.jpg')
            },
            {
                id: 1, 
                title: 'Data scientist intern at ABBYY', 
                dates: 'Jul. 2015 – Sep. 2015',
                role: 'Python • Machine Learning',
                img: require('../assets/img/ABBYY.jpg'),
            }
        ],
        education: [
            {
                id: 0, 
                title: 'Master\'s degree in Computer Science at MIPT', 
                dates: 'Sep. 2016 – Present',
                role: 'Computer Vision',
                img: require('../assets/img/MIPT.jpg')
            },
            {
                id: 1, 
                title: 'Bachelor\'s degree in Computer Science at MIPT', 
                dates: 'Sep. 2012 – Jul. 2016',
                role: 'Natural Language Processing',
                img: require('../assets/img/MIPT.jpg'),
            }
        ]
    }
  },
  components: {
    experienceItem: ExperienceItem
  }
}
</script>

<style lang="scss">
    #experience {
        background-color: const('COLOR_NEUTRAL_2');
    }
</style>