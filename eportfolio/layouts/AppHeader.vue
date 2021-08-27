<template>
    <v-app-bar
      prominent
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-row>
          <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
          >
            <img 
              src="https://media-exp1.licdn.com/dms/image/C5603AQGLG4BVQ9IPaQ/profile-displayphoto-shrink_200_200/0/1517602173837?e=1635379200&v=beta&t=xasfuw-Pko2oBTSZY_Vx09JxspUvaxzZ-jLKjQcHrY0" 
              width="33"
              height="33"
            />
          </v-avatar>
          <v-title class="text-center">Patrick Sabry's E-portfolio</v-title>
          <v-spacer />
          <v-btn
            v-for="link in links"
            :key="link.title"
            text
            @click="$vuetify.goTo(`${link.anchor}`)"
          >
            {{ link.title }}
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
    props: {
        links: Array
    }
}
</script>