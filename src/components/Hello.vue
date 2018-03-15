<template>
  <header id="hello-text-block">
    
    <div class="overlay">
        <div id="hello-text-container">
          <p>Hi, I am <span class="accent">Mariia</span>,</p>
          <p>Software Engineer.</p>
        </div>
        <a href=#projects v-scroll-to="'#projects'">
          <md-button id="view-work" class="md-raised">View my work</md-button>
        </a>
    </div>
  </header>
</template>

<style lang="scss">
    #hello-text-block {
        background-image: url("../assets/img/header-bg.jpg");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 700px;
        max-height: 100%;

        #hello-text-container {
          margin-bottom: 10px;

          p {
            font-weight: 400;
            font-size: 3em;
            margin: 40px;
            color: const("COLOR_NEUTRAL_1");
          }
        }

        #view-work {
          padding: 10px 20px;
          background-color: const("COLOR_ACCENT");
          color: const("COLOR_NEUTRAL_1");
          font-size: 1.2em;
        }

        .overlay {
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);

          display: flex;
          justify-content: center;
          flex-direction: column;
        }
    }
</style>