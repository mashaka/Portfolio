<template>
<b-navbar toggleable="md" variant="dark" type="dark" fixed="top" v-b-scrollspy="56">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-navbar-brand href="#">MS</b-navbar-brand>
    
    <b-collapse is-nav id="nav_collapse">  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#projects" v-scroll-to="'#projects'">Projects</b-nav-item>
            <b-nav-item href="#experience" v-scroll-to="'#experience'">Experience</b-nav-item>
            <b-nav-item href="#hackathons" v-scroll-to="'#hackathons'">Hackathons</b-nav-item>
            <b-nav-item href="#contacts" v-scroll-to="'#contacts'">Contacts</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>