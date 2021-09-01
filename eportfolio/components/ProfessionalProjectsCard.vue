<template>
  <v-card
    id="professional-projects"
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
            <v-card-title class="font-weight-bold">Professional Projects</v-card-title>

        </v-col> 
    </v-row>
    
    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">CareerOne's Celeste AI Salary Prediction System</v-card-title>
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
            <h4>Technologies: AWS, Python, Tensorflow, Keras, Sci-kit Learn, PHP, Laravel, MySQL</h4> <br>
            <p>The Salary Prediction system, nicknamed Celeste, was built using a deep neural network trained on over 1 million data points and yields an accuracy of ~87%. It utilises deep learning to produce salary estimation figures based on job title, description, skills, location and occupation that provide important insight for job seekers and advertisers. This system is able to provide key insights into a job seekers personal worth based on their job title, skills, location and so forth, while also helping job advertisers accurately advertise their job for the correct salary. This project is a revolutionary and innovative step in the online job recruitment market within Australia.</p>
        </v-col>
    </v-row>
    
    <v-divider></v-divider>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">CareerOne Admin CRM Dashboard</v-card-title>
         <v-img
            height="350"
            width="450"
            src="/c1-dashboard.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <h4>Technologies: AWS, PHP, Node JS, Laravel, Vue JS, Nuxt JS, MySQL</h4> <br>
            <p>The CareerOne Admin dashboard project was started due to an increasing demand for customer relationship management tooling that transcended the 
                limitations of existing out-of-the-box solutions. This project solved that problem by providing
                a bespoke platform that allowed sales and marketing personnel to self serve many previously manual
                business processes. I personally developed the full stack componentry for the Job Management, User Management, Ad Blacklisting and Data Mapping functionalities.
            </p>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">Applyflow Legacy System Migration</v-card-title>
         <v-img
            height="350"
            width="450"
            src="/applyflow.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <h4>Technologies: AWS, PHP, Laravel, MySQL</h4> <br>
            <p>Applyflow Ltd. was formerly known as JXT Recruitment, a multinational recruitment platform vendor
              specialising in the development of bespoke recruiter job websites. My team at CareerOne was contracted
              to re-build their platform from scratch. I was in charge of the data migration implementation of over 
              20 international clients spanning Australia, England, America and Netherlands. I successfully migrated and re-mapped
              legacy taxonomy datasets including job advertisements, locations, classifications and user email data into the 
              brand new Applyflow ecosystem. This data migration strategy followed a parallel software development methodology
              to ensure no disruptions to existing systems.
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

    .project-img {
        justify-content: center;
        
    }  
    .v-card__title {
      display: block;
    }


</style>