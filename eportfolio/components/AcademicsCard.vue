<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="650"
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
                <v-card-title>Academic Achievements</v-card-title>
                <v-card-text>
                    Hi, my name is Patrick! <br>
                    I am a final year student studying a Bachelor of Software Engineering at UTS.
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