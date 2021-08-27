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
          <v-card-title class="font-weight-bold">Engineering Competencies</v-card-title>
        </v-col> 
        </v-row>
        <v-row
          align="center"
          class="project-img"
        >
          <v-col align="center" cols="auto">
            <v-img
                height="350"
                width="600"
                src="/ea-competencies.png"
                class="project-img"
            />
          </v-col> 
        </v-row>
        <v-row>
            <v-col cols="11" class="ml-7">
                <p>As part of the Diploma of Professional Practice at UTS, I was required to undertake two 6-month internships complimented by theoretical professional development subjects. 
                  This was the university's attempt at providing a guided avenue into real-world engineering experience and reflection to students prior to their graduation. <br><br>
                  This program provides students a head-start for achieving 'chartered' status with EA by encouraging students to achieve functional levels for Engineers Australia Stage 2 Competencies, 
                  since achieving 'chartered' status with EA provides a competitive edge within the engineering profession. 
                  It is championed as a symbol of trust that ensures a qualified engineer is "globally recognised, and recognised by the community, industry and Government as Professional" (Engineers Australia n.d.). <br><br>
                  My personal EA competency progress is depicted in the above progress chart. Completing both internships and numerous projects highlighted in the projects section have enabled me to develop a function level of competency for each.
                  The learning journey is far from over, and I will strive to continue to fulfill the stage 2 EA competencies to hopefully achieve chartered status with Engineers Australia one day.
                </p>
            </v-col>
        </v-row>

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
        {text: 'Proficient with MySQL relational modelling and querying. 3+ years’ experience data modelling production grade systems using a data-driven development approach.'},
        {text: 'Proficient in Python 3 scripting for data wrangling as well as API development (flask).'},
        {text: 'Familiar with popular machine learning frameworks and libraries including TensorFlow, Keras, Scikit-Learn, OpenCV, seaborn/matplotlib, pandas, NumPy.'},
        {text: 'End to end design, development and Productionization of machine learning models. Firsthand experience taking a conceptual ML model from prototype all the way to production including AWS EC2 configuration.'},
        {text: 'Familiar with the Amazon Web Services ecosystem including EC2, RDS and security group configuration.'},
        {text: 'Comfortable with backend PHP development using the Laravel framework. 2+ years’ experience working in a production environment building complex backend systems for the CareerOne platform.'},
        {text: 'Experience using Vue JS framework for front end web app development at CareerOne.'}
      ],
      transferableSkills: [
        {text: 'Confident team player, experience working in lean, cross-functional agile teams'},
        {text: 'Strong technical and subjective written skills'},
        {text: 'Able to show initiative and work autonomously when required'},
        {text: 'Punctual with time, virtuous moral compass and respectful of others'},
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