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
            <p>The Salary Prediction system, nicknamed Celeste, was built using a deep neural network trained on over 1 million data points. 
               It utilises deep learning to produce salary estimation figures that provide important insight to job seekers and job advertisers on the CareerOne website. <br><br>

               I was responsible for the end to end development of this project as the head of my AI sub-team in the CareerOne Product Technology team. I managed stakeholder
               expectations and performed both implementation and project management tasks. I communicated project progress to upper management and ensured 
               the project was adhering to financial and time constraints. The project was successfully delivered in late 2019, and I regard this project as the highlight
               of my professional experiences thus far in industry. 
            </p>
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
                business processes. <br><br>
                
                I personally developed the full stack componentry for the Job Management, User Management, Ad Blacklisting and Data Mapping functionalities. This was
                a greenfield internal project, and thus it presented me with a unique opportunity to not just program the solution, but also be responsible for 
                user requirements modelling, scoping and UI design of the components I built. This allowed me to engage in the entire project development lifecycle
                autonomously. I learnt invaluable lessons in self accountability and solution architecture.
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
            <p>My team at CareerOne was contracted by a Recruitment company Applyflow Ltd to re-build their platform from scratch. 
               I was in charge of the data migration implementation of over 20 international clients spanning Australia, England, America and Netherlands. 
               I successfully migrated and re-mapped legacy taxonomy datasets into the 
               brand new Applyflow ecosystem. <br><br>
               
               I utilised a parallel software development methodology when completing this project to ensure no disruptions to existing systems. In order to
               deliver the project successfully, I was required to intensively communicate and collaborate with the client's technical team, marking my first
               experience working with external stakeholders to deliver an enterprise grade solution. I diligently maintained communication channels with the
               client throughout the entire process and my team successfully delivered the system to promised scope in 2020.
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