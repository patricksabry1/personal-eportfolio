<template>
  <v-app id="inspire">
    <Header :links="links" />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet 
              width="210"
              rounded="lg" 
              elevation="0" 
              id="roadmap"
            >
              <v-list color="transparent">
                <v-list-item
                  v-for="link in links"
                  :key="link"
                  link
                  @click="$vuetify.goTo(`${link.anchor}`)"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ link.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <div class="container responsive">
                <Nuxt />
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="1">
            
          </v-col>

        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Header from '@/layouts/AppHeader.vue';
  import Footer from '@/layouts/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },

    data: () => ({
      links: [{
        title: 'About me',
        anchor: '#profile'
      },
      {
        title: 'Work Experience',
        anchor: '#work-experience'
      },
      {
        title: 'Projects',
        anchor: '#projects'
      },
      {
        title: 'Skills',
        anchor: '#skills'
      },
      {
        title: 'Academic Achievements',
        anchor: '#academics'
      },
      {
        title: 'Resume',
        anchor: '#resume'
      }],
    }),
  }
</script>

<style lang="scss" scoped>
  #roadmap {
    position: fixed;
    float: right;
    top: 142px;
    margin-left: 60px;
  }

  @media screen and (max-width: 1265px) {
    #roadmap { display: none; }   /* hide it */
  }

  div {
    text-align: justify;
    text-justify: inter-word;
  }
</style>