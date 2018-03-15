<template>
    <md-card class="project-card">
        <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="4:3">
            <img :src="project.img" :alt="getAlt(project)">
        </md-card-media>

        <md-card-area>
            <md-card-header>
                <span class="md-title">{{ project.title }}</span>
                <span class="md-subhead">{{ project.description }}</span>
            </md-card-header>

            <md-card-actions>
                <a :href="project.link">
                    <md-button>Learn more</md-button>
                </a>
            </md-card-actions>
        </md-card-area>
        </md-card-media-cover>
    </md-card>
</template>

<script>
    export default {
        props: ['project'],
        methods: {
            getAlt: function (project) {
                return project.name + " project";
            }
        }
    };
    
</script>

<style lang="scss">
    .project-card {
        max-width: 400px;
        width: 100%;
        margin: 20px;
        display: inline-block;
        vertical-align: top;

        .md-title {
            font-size: 26px;
            margin-bottom: 5px;
        }

        .md-subhead {
            font-size: 16px;
        }
    }
</style>