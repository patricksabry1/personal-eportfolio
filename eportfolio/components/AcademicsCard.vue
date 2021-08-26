<template>
  <v-card
    id="academics"
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

            </v-col> 
        </v-row>
        <v-row>
            <v-col cols="7" class="ml-7">
                <p>I was included on the UTS Faculty of Engineering &amp; Information Technology Dean's list for Engineering excellence in 2021.</p>
            </v-col>
             <v-col cols="4">
                    <v-img
                        height="150"
                        width="300"
                        src="https://media-exp1.licdn.com/dms/image/C5622AQG9UA-bmfUzdQ/feedshare-shrink_800/0/1624938622478?e=1632960000&v=beta&t=hI-uj6T3fXK2eFT8DkYA___2BXEAFp0piAotBmpnWoA"
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
</style>