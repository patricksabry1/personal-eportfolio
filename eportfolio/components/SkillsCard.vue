<template>
  <v-card
    id="skills"
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
            <v-col cols="12">
                <v-card-title>Technical Skills</v-card-title>
                
                <v-list>
                  <v-list-item
                    v-for="(skill, i) in technicalSkills"
                    :key="i"
                    text
                  >
                    <v-card-text>
                      &#8226; {{ skill.text }}
                    </v-card-text>
                  </v-list-item>
               </v-list>
            </v-col>
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="auto">
                <v-card-title>Transferable Skills</v-card-title>
                
                 <v-list>
                  <v-list-item
                    v-for="(skill, i) in transferableSkills"
                    :key="i"
                    text
                  >
                    <v-card-text>
                      &#8226; {{ skill.text }}
                    </v-card-text>
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
        {
          text: 'End to end design, development and Productionization of machine learning models. Firsthand experience taking a conceptual ML model from prototype all the way to production including AWS EC2 configuration. Notable familiarities with machine learning include:',
          inner: [
            {text: 'Pre-processing of hybrid textual/numeric feature spaces. Familiar with concepts of discretization, binning, class balancing, encoding and scaling.'},
            {text: 'Hyperparameter tuning using gridsearch'},
            {text: 'NLP modelling for binary & multivariate classification tasks.'},
            {text: 'Deep neural network design for traditional classification/regression tasks'},
          ]
        },
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
</style>