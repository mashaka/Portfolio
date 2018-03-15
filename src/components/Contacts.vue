<template>
    <section id="contacts">
        <p class="section-header"><span class="accent">Con</span>tact</p>
        <b-container class="data-container" fluid>
            <b-row class="justify-content-md-center">
                <b-col md="12" >
                    <contact
                        v-for="item in contacts" 
                        :key="item.id"
                        v-bind:contact="item">
                    </contact>
                </b-col>
            </b-row>
        </b-container>
    </section>   
</template>

<script>
import Contact from './Contact.vue'

export default {
    name: 'contacts',
    data () {
        return {
            contacts: [
                {
                    id: 0, 
                    name: 'LinkedIn',
                    icon: 'linkedin-square',
                    link: 'https://www.linkedin.com/in/mariasandrikova'
                },
                {
                    id: 1, 
                    name: 'GitHub',
                    icon: 'github-square',
                    link: 'https://github.com/mashaka'
                },
                {
                    id: 2, 
                    name: 'Facebook',
                    icon: 'facebook-square',
                    link: 'https://www.facebook.com/maria.sandrikova'
                }
            ]
        };
    },
    components: {
        contact: Contact    
    }
}
</script>
    
<style lang="scss">
#contacts {
    background-color: const('COLOR_NEUTRAL_2');
}
</style>