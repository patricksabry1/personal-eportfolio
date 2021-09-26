<template>
  <v-card
    id="leadership"
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
                <v-card-title class="font-weight-bold">Leadership</v-card-title>
            </v-col> 
        </v-row>
        <v-row
          align="center"
          class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Running my own sub-team at CareerOne</v-card-title>
            </v-col> 
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="11" class="ml-7">
                <p>
                   During my time at CareerOne I had the privilege of running my own project as a Data Scientist developing a brand
                   new artificial intelligence system. Being the only resource in my immediate team with the expertise to 
                   develop the solution, I was tasked with scoping the solution and managing all project stakeholders by myself. 
                   I was able to hire an intern software engineer to work on the project alongside me, and I had the responsibility of
                   introducing that resource to the project and work alongside him. <br><br> 
                   
                   In order to successfully deliver the project, I managed the software developement lifecycle by accurately scoping user requirements, 
                   quantifying workloads and subsequently overseeing the progress of my team. This was an invaluable experience operating as a hands on product owner,
                   communicating progress reports to upper management and handling all aspects of human and technical resource management. My teammate 
                   and I successfully delivered the system in late 2019, and the system has been operating in production with no major failures
                   ever since on the CareerOne.com.au website. 
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