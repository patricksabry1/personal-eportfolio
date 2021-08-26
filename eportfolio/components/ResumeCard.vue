<template>
  <v-card
    id="resume"
    :loading="loading"
    class="mx-auto my-12"
    max-width="650"
    elevation="4"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <div>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Resume</v-card-title>
                <v-card-text>
                  You can download my up to date resume <a href="/resume.pdf" target="blank">here</a>.
                </v-card-text>
                
            </v-col>
                 
        </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .profile-banner {
        z-index: 0;
    }

    .profile-pic {
        z-index: 10;
        background-color: #fff;
        border: 3px solid white;
        border-radius: 50%;
        left: 14px;
        top:90px;
    }

    .website-info {
        display: flex;
        justify-content: space-evenly;
        ;
    }
</style>