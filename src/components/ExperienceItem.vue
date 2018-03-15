<template>
    <md-card class="experience-card">
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">{{ experienceItem.title }}</div>
                <div class="md-subhead">{{ experienceItem.dates }}</div>
                <div class="md-subhead">{{ experienceItem.role }}</div>
            </md-card-header-text>

            <md-card-media>
                <img :src="experienceItem.img" :alt="getAlt(experienceItem)">
            </md-card-media>
        </md-card-header>
    </md-card>
</template>

<script>
    export default {
        props: ['experienceItem'],
        methods: {
            getAlt: function (experienceItem) {
                return experienceItem.name + " experience item";
            }
        }
    };
    
</script>

<style lang="scss">
    .experience-card {
        background-color: const('COLOR_NEUTRAL_1');
        max-width: 550px;
        width: 100%;
        margin: 20px;
        display: inline-block;
        vertical-align: top;

        .md-card-media {
            display: flex;
            align-items: center;
        }

        .md-card-header {
            margin: 0px;

            .md-title {
                font-size: 18px;
            }
        }
    }
</style>