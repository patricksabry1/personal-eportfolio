<template>
  <div>
    <v-app-bar
      prominent
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-row>
          <v-col cols="4">
            <v-title class="text-center">Patrick's E-portfolio</v-title>
          </v-col>
          <v-col cols="8">
            <v-btn
              class="hidden-sm-and-down"
              v-for="link in links"
              :key="link.title"
              text
              @click="$vuetify.goTo(`${link.anchor}`)"
            >
              {{ link.title }}
            </v-btn>
          </v-col>
          <v-col cols="2" class="mr-0">
            <v-app-bar-nav-icon 
              @click.stop="drawer = !drawer"
              class="hidden-md-and-up" 
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="drawer"
    >
      <div class="drawer-list-wrapper">
        <v-list
          nav
          dense
          class="drawer-list"
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-blue--text text--accent-4"
          >
            <v-list-item
              v-for="link in links"
              :key="link.anchor"
              link
              @click="$vuetify.goTo(`${link.anchor}`)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ link.title }}
                </v-list-item-title>
              </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    props: {
        links: Array
    },

    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style lang="scss" scoped>
  .drawer {
    position: fixed;
    overflow-y: scroll;
    overflow: hidden;
  }
  .drawer-list {
    text-transform: uppercase;
    position: fixed;
    display: block; 
  }
</style>