<template>
  <v-footer
    class="justify-center mt-2"
    padless
  >
   <v-row class="indigo">
        <v-col cols="2" />
        <v-col cols="9">
            <v-card
            flat
            tile
            class="indigo white--text text-center"
        >
        <v-card-text>
            <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4 white--text"
            icon
            :href="`${icon.link}`"
            target="_blank"
            >
            <v-icon size="24px">
                {{ icon.icon }}
            </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
            <strong>"Compare yourself to who you were yesterday, not to who someone else is today"</strong> - Jordan B. Peterson
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
           &copy; {{ new Date().getFullYear() }}  <strong>Patrick Sabry</strong>
        </v-card-text>
        </v-card>
        </v-col>            
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    computed: {},
    data: () => ({
      icons: [{
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/patricksabry/'
      }],
    }),
  }
</script>

<style lang="scss" scoped>
    v-footer {
        width: 100%;
    }
    a:link {
      color: white;
      background-color: transparent;
      text-decoration: none;
    }
    a:visited {
      color: pink;
      background-color: transparent;
      text-decoration: none;
    }
    a:hover {
      color: red;
      background-color: transparent;
      text-decoration: underline;
    }
    a:active {
      color: yellow;
      background-color: transparent;
      text-decoration: underline;
    }
</style>