<template>
  <v-card
    id="academics"
    class="mx-auto my-12"
    max-width="650"
    elevation="4"
  >
    <div>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Academic Experience</v-card-title>

            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="2" class="ml-7 strip-col">
                <h4>Degree: </h4>
            </v-col>
            <v-col cols="8" class="strip-col">
                <p>Bachelor of Engineering (Honours), Diploma in Professional Engineering Practice</p>
            </v-col>
            <v-col cols="2" class="ml-7 strip-col">
                <h4>Major: </h4>
            </v-col>
            <v-col cols="8" class="strip-col">
                <p>Software</p>
            </v-col>
             <v-col cols="2" class="ml-7 strip-col">
                <h4>Sub-Major: </h4>
            </v-col>
            <v-col cols="8" class="strip-col">
                <p>Data Analytics</p>
            </v-col>
        </v-row>

        <v-row
          align="center"
          class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Academic Achievements</v-card-title>
            </v-col> 
        </v-row>
        <v-row>
            <v-col cols="7" class="ml-7">
                <p>I was included on the UTS Faculty of Engineering &amp; Information Technology Dean's list for engineering excellence in 2021.</p>
            </v-col>

        </v-row>
        <v-row
            align="center"
            class="project-img"
        >
        <v-col align="center" cols="auto">
            <v-img
                height="400"
                width="600"
                src="/deans_list.png"
                class="project-img mb-2 mt-4"
            />
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

    .strip-col {
        padding-bottom: 0px;
    }

    .project-img {
        justify-content: center;
        
    }   
</style>