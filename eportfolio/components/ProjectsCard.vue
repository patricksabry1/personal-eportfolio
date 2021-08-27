<template>
  <v-card
    id="projects"
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
            <v-card-title class="font-weight-bold">Projects</v-card-title>

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
            <p>The Salary Prediction system, nicknamed Celeste, was built using a deep neural network trained on over 1 million data points and yields an accuracy of ~87%. It utilises deep learning to produce salary estimation figures based on job title, description, skills, location and occupation that provide important insight for job seekers and advertisers. This system is able to provide key insights into a job seekers personal worth based on their job title, skills, location and so forth, while also helping job advertisers accurately advertise their job for the correct salary. This project is a revolutionary and innovative step in the online job recruitment market within Australia.</p>
        </v-col>
    </v-row>
    
    <v-divider></v-divider>

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
            <p>For completion of my Engineering Capstone thesis, I was part of a multi-disciplinary team which set out to develop a real-time IoT web dashboard for a UTS industry partner.
              As a member of the software team, I spearheaded the development of serverside and front end web applications to facilitate real-time data streaming and data visualisation through a web dashboard. <br><br>
              The cloud-based bi-directional IoT dashboard system was designed to augment large scale agricultural machinery in hard to reach rural areas to automate their oversight and maintenance as much as possible. 
              Farmland is often located in hard-to-reach rural areas, away from central business districts which makes operators risk averse to leveraging technology in their processes in case of failures.<br><br> 
              The proposed system solved this problem by gathering operational data in real-time through its network of sensors on site, processing and presenting this data through the cloud in the form of a web dashboard. 
              This affords operators real-time remote monitoring capabilities through intricate data visualisations.</p>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">Travelogue Intelligent Trip Planner App</v-card-title>
         <v-img
            height="350"
            width="450"
            src="/travelogue.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <p>The Travelogue app is an intelligent web application that leverages complex algorithms and machine learning to serve curated trip suggestions to a user based on their inputs. 
              The app aggregates and processes hotel, venue, flight and weather data from disparate sources to generate a trip that best suites the user's constraints. <br><br>
              The project was part of the Software Engineering Studio subject at UTS, and as a member of a 13 person team I contributed to the backend applications that acquired, processed and stored the trip data for use by the web application.
              This included the development of data ETL pipelines, API data retrieval, API development, database development and machine learning model development and integration.
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

</style>