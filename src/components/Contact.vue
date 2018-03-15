<template>
    <a class="contact" :href="contact.link">
        <icon :name="contact.icon" scale="4"></icon>
    </a>
</template>

<script>
export default {
    props: ['contact']
};
</script>

<style lang="scss">
.contact {
    margin: 20px;
    color: darkgrey;
}
</style>