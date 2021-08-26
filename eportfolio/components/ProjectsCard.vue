<template>
  <v-card
    id="projects"
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
            <v-card-title>Projects</v-card-title>

        </v-col> 
    </v-row>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col cols="auto">
        <v-card-title class="font-weight-bold">CareerOne's Celeste AI Suite</v-card-title>
         <v-img
            height="400"
            width="350"
            src="/celeste.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <p>I was included on the UTS Faculty of Engineering &amp; Information Technology Dean's list for Engineering excellence in 2021.</p>
        </v-col>
    </v-row>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">Real-time Data Analytics App for Industrial IoT Applications</v-card-title>
         <v-img
            height="350"
            width="450"
            src="/ausdrill-halo.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <p>I was included on the UTS Faculty of Engineering &amp; Information Technology Dean's list for Engineering excellence in 2021.</p>
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

    .project-img {
        justify-content: center;
        
    }   

</style>