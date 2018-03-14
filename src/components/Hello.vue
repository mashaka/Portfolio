<template>
  <section id="hello-text-block">
    <div id="hello-text-container">
      <p>Hi, I am <span class="accent">Mariia</span>,</p>
      <p>Software Engineer.</p>
    </div>
    <a href=#projects>
      <md-button id="view-work" class="md-raised">View my work</md-button>
    </a>
  </section>
</template>

<style lang="scss">
    #hello-text-block {
        background-color: const('COLOR_NEUTRAL_2');

        #hello-text-container {
          padding: 50px;

          p {
            font-weight: 500;
            font-size: 2.5em;
          }
        }

        #view-work {
          padding: 0px 20px;
          background-color: const("COLOR_ACCENT");
        }
    }
</style>