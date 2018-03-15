<template>
    <md-card class="hackathon-card">
        <md-card-media md-ratio="1:1">
            <img :src="hackathon.img" :alt="getAlt(hackathon)">
        </md-card-media>

        <md-card-area>
            <md-card-header>
                <span class="md-title">{{ hackathon.description }}</span>
            </md-card-header>

            <md-card-actions>
                <md-chip class="winner-badge" v-if="hackathon.isWinner" >Winner</md-chip>
                <md-chip v-else ></md-chip>
                <a :href="hackathon.link">
                    <md-button>Learn more</md-button>
                </a>
            </md-card-actions>
        </md-card-area>
    </md-card>
</template>

<script>
export default {
    props: ['hackathon'],
    methods: {
        getAlt: function (hackathon) {
            return hackathon.name + ' hackathon';
        }
    }
};
</script>

<style lang="scss">
.hackathon-card {
    max-width: 220px;
    width: 100%;
    margin: 20px;
    display: inline-block;
    vertical-align: top;

    .md-card-actions {
        display: flex;
        justify-content: space-between;
    }

    .winner-badge {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        margin-left: 5px;
        background-color: const('COLOR_WINNER');
    }

    .md-title {
        font-size: 18px;
    }
}
</style>