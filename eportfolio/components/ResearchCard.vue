<template>
  <v-card
    id="research"
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
                <v-card-title class="font-weight-bold">Research</v-card-title>
            </v-col> 
        </v-row>
        <v-row
          align="center"
          class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Smart IoT Web Dashboard for Remote Industrial Applications</v-card-title>
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
                src="/research-halo.png"
                class="project-img ml-4"
            />
        </v-col> 
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="11" class="ml-7">
                <p>
                    My bachelor degree honours thesis was a multidisciplinary industry sponsored project at UTS for Ausdrill Pty Ltd. I worked alongside fellow electrical and software engineering peers to develop an intelligent web application designed to augment
                    large scale industrial machinery with sensor networks and a digital twin web system. The system gathers operational data in real-time, processing and 
                    presenting this data through the cloud to offer bespoke data visualisations and remote maintenance capabilities. <br><br>

                    Throughout the project I spearheaded the software engineering component of the project, working autonomously in scoping client
                    requirements, designing the software architecture end to end and most importantly liasing with my peers to ensure that my systems 
                    interface seamlessly with the IoT team's physical systems. I strived to provide high quality documentation and communication to my peers and supervisors
                    to ensure smooth handover and project continuity.
                </p>
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