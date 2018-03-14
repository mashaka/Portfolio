<template>
<b-navbar class="custom-navbar" toggleable="md" variant="dark" type="dark" fixed="top" v-b-scrollspy="56">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-navbar-brand id="brand" href="#">Mariia <span class="accent">Sandrikova</span></b-navbar-brand>
    
    <b-collapse is-nav id="nav_collapse">  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item class="custom-nav-item" href="#projects" v-scroll-to="'#projects'">Projects</b-nav-item>
            <b-nav-item class="custom-nav-item" href="#experience" v-scroll-to="'#experience'">Experience</b-nav-item>
            <b-nav-item class="custom-nav-item" href="#hackathons" v-scroll-to="'#hackathons'">Hackathons</b-nav-item>
            <b-nav-item class="custom-nav-item" href="#contacts" v-scroll-to="'#contacts'">Contacts</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<style lang="scss">

.custom-navbar {
    box-shadow:  0px 3px 5px #aaaaaa;
    padding-left: 40px;
    padding-right: 40px;

    #nav_collapse {
        text-transform: uppercase;
        .nav-link {
            color: const('COLOR_NEUTRAL_1');
            letter-spacing: 1px;
            padding-left: 1em;
        }

        .nav-link:hover {
            color: const('COLOR_ACCENT');
            text-decoration: none;
        }

        .active{
            color: const('COLOR_ACCENT');
        }

    }

    #brand{
        font-family: 'Kaushan Script', cursive;
        font-weight: 400;
        font-size: 1.5em;
        text-decoration: none;
    }
}
</style>
