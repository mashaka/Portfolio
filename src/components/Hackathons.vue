<template>
    <section id="hackathons" class="section">
        <p class="section-header"><span class="accent">Hac</span>kathons</p>
        <b-container fluid>
            <b-row class="justify-content-md-center">
                <b-col md="3" v-for="item in hackathons" :key="item.id">
                    <hackathon
                        v-bind:hackathon="item">
                    </hackathon>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import Hackathon from './Hackathon.vue'

export default {
    name: 'hackathons',
    data () {
        return {
            hackathons: [
                {
                    id: 0, 
                    name: 'HackTrain 4.0',
                    isWinner: true,
                    description: 'London, 2017', 
                    img: require('../assets/img/hacks/hack-train.jpg'),
                    link: 'https://devpost.com/software/the-disruptors'
                },
                {
                    id: 1, 
                    name: 'HackUPC 2017 Fall',
                    isWinner: true,
                    description: 'Barcelona, 2017', 
                    img: require('../assets/img/hacks/hackupc-2017-fall.png'),
                    link: 'https://devpost.com/software/tripscanner'
                },
                {
                    id: 2, 
                    name: 'Imagine Cup World Finals',
                    isWinner: false,
                    description: 'Seattle, 2017', 
                    img: require('../assets/img/hacks/imagine-cup.jpg'),
                    link: 'https://meetarticles.me/'
                },
                {
                    id: 3, 
                    name: 'AngelHack Dubai',
                    isWinner: false,
                    description: 'Dubai, 2017', 
                    img: require('../assets/img/hacks/angelhack-dubai.png'),
                    link: 'http://www.hackathon.io/beconfident'
                },
                {
                    id: 4, 
                    name: 'AngelHack Moscow',
                    isWinner: true,
                    description: 'Moscow, 2017', 
                    img: require('../assets/img/hacks/angelhack-moscow.png'),
                    link: 'http://apps4all.ru/post/07-04-17-kto-pobedil-v-finale-angelhack-17e'
                },
                {
                    id: 5, 
                    name: 'CopenHacks',
                    isWinner: true,
                    description: 'Copenhagen, 2017', 
                    img: require('../assets/img/hacks/copenhacks-2017.png'),
                    link: 'https://devpost.com/software/stop-sti-0cvw2k'
                },
                {
                    id: 6, 
                    name: 'HackUPC Winter',
                    isWinner: true,
                    description: 'Barcelona, 2017', 
                    img: require('../assets/img/hacks/hackupc-2017-winter.png'),
                    link: 'https://devpost.com/software/barney'
                },
                {
                    id: 7, 
                    name: 'Junction',
                    isWinner: false,
                    description: 'Helsinki, 2016', 
                    img: require('../assets/img/hacks/junction-2016.png'),
                    link: 'https://devpost.com/software/colorme-50fz68'
                }
            ]
        }
    },
    components: {
        hackathon: Hackathon    
    }
}
</script>
    
<style lang="scss">
    #hackathons {
        background-color: const('COLOR_NEUTRAL_1');
    }
</style>