<template>
  <v-card
    id="skills"
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
                <v-card-title class="font-weight-bold">Technical Skills</v-card-title>
            </v-col> 
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="11" class="ml-7">                
                <v-list>
                  <v-list-item
                    v-for="(skill, i) in technicalSkills"
                    :key="i"
                    text
                  >
                    <p>
                      &#8226; {{ skill.text }}
                    </p>
                  </v-list-item>
               </v-list>
            </v-col>
        </v-row>
        <v-row
          align="center"
          class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Transferable Skills</v-card-title>
            </v-col> 
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="11" class="ml-7">                
                 <v-list>
                  <v-list-item
                    v-for="(skill, i) in transferableSkills"
                    :key="i"
                    text
                  >
                    <p>
                      &#8226; {{ skill.text }}
                    </p>
                  </v-list-item>
               </v-list>
            </v-col>
        </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      technicalSkills: [
        {text: 'Keen eye for big picture cloud solution architecture on AWS. Business requirements modelling, stakeholder management, cost optimisation.'},
        {text: 'Familiar with Snowflake, RDS (MySQL / PostgresQL) and Redshift DWH platforms. First hand experience developing and maintaining Kimball-esque star schema data warehouse platforms across two different companies for departmental analytical reporting.'},
        {text: 'Familiar with DBT framework. Project setup and development, including setup and maintenance of scheduled job runs, multi-environment CI/CD.'},
        {text: 'Experienced in developing custom ETL/ELT data pipelines using Python, Lambda, Glue, EMR, Apache Airflow. 4+ years’ experience data modelling production grade systems using a data-driven development approach.'},
        {text: 'Proficient with MySQL/Postgres modelling and querying. 4+ years’ experience relational data modelling production grade systems using a data-driven development approach.'},
        {text: 'Proficient in Python 3 scripting for data wrangling as well as API development (flask).'},
        {text: 'Familiar with popular machine learning frameworks and deep learning concepts (TensorFlow 2, Keras, Scikit-Learn, NLTK, OpenCV, seaborn/matplotlib). Successfully delivered a hybrid feature space deep NLP model for ontology auto-completion and job salary prediction at CareerOne Pty Ltd.'},
        {text: 'End to end design, development and Productionization of machine learning models. Firsthand experience taking a conceptual ML model from prototype all the way to production including cloud configuration.'},
        {text: '4+ years experience navigating the Amazon Web Services ecosystem including EC2, RDS, EMR, Glue, S3 & more.'},
        {text: 'Comfortable with backend PHP Laravel & Python development. 2+ years’ experience working in a production environment building complex backend systems for the CareerOne platform.'},
        {text: 'Experience using Vue JS framework for front end web app development and integrating backend APIs with frontend Vue apps.'}
      ],
      transferableSkills: [
        {text: 'Confident team player, experience working in lean, cross-functional agile teams.'},
        {text: 'Strong verbal and written communication, enthusiastic team leader and outcome-driven.'},
        {text: 'Able to show initiative and work autonomously.'},
      ]
    }),
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

    .v-list-item {
      padding: 0;
    }

    .project-img {
      justify-content: center;
    }  
</style>