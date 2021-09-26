<template>
  <v-card
    id="academic-projects"
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
            <v-card-title class="font-weight-bold">Academic Projects</v-card-title>

        </v-col> 
    </v-row>

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
            <h4>Technologies: TypeScript, Python, PyTorch, Firebase, MongoDB, Express JS, React JS</h4> <br>
            <p>
              The Travelogue app is an intelligent web application that leverages complex algorithms and machine learning to serve curated trip suggestions to a user based on their inputs. 
              The app aggregates and processes hotel, venue, flight and weather data from disparate sources to generate a trip that best suites the user's constraints. <br><br>
              
              I completed this project as a member of a fifteen person software engineering team for the Software Engineering Studio subject at UTS. 
              I contributed heavily to the design and development of the backend software applications powering the system.
              This was my first experience working in a large scale team on a software project, and this came with challenges in project management and communication.
              This challenge was overcome by holding formal weekly meetings, maintaining an informal instant messaging communication channel and leveraging project management tooling such as 
              Trello and Github.
            </p>
        </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row
        align="center"
        class="project-img"
    >
      <v-col align="center" cols="auto">
        <v-card-title class="font-weight-bold">Scalable Movie Recommendation System</v-card-title>
         <v-img
            height="400"
            width="550"
            src="/movie-rec.png"
            class="project-img"
         />
      </v-col> 
    </v-row>
    <v-row>
        <v-col cols="11" class="ml-7">
            <h4>Technologies: Spark, Python</h4> <br>
            <p>
              This project was completed for the Intro to Data Analytics subject at UTS, and involved the implementation of a content based recommendation system to generate user movie suggestions using Apache Spark.
              The Spark distributed compute framework was used to ensure that this algorithm implementation is horizontally scalable and servicable to a high volume real world enviornment. <br><br>

              Through developing this project I gained an in depth understanding of the cutting edge recommender systems being used in 
              industry, and how they are designed to be highly scalable. I achieved a model accuracy of ~93%, and learnt a new technology in the 
              process which could be applied to my professional work.
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