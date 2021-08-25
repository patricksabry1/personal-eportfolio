<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        >
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGLG4BVQ9IPaQ/profile-displayphoto-shrink_200_200/0/1517602173837?e=1635379200&v=beta&t=xasfuw-Pko2oBTSZY_Vx09JxspUvaxzZ-jLKjQcHrY0" />
        </v-avatar>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="link in links"
                  :key="link"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ link }}
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
  import Footer from '@/layouts/footer.vue';

  export default {
    components: {
      Footer
    },
    data: () => ({
      links: [
        'About me',
        'Academic Experience',
        'Work Experience',
        'Resume',
      ],
    }),
  }
</script>