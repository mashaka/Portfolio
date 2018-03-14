<template>
    <a class="contact" :href="contact.link">
        <icon :name="contact.icon" scale="4"></icon>
    </a>
</template>

<script>
    export default {
        props: ['contact'],
        methods: {
            getAlt: function (contact) {
                return contact.name + " link";
            }
        }
    };
</script>

<style lang="scss">
    .contact {
        margin: 20px;
        color: darkgrey;
    }
</style>