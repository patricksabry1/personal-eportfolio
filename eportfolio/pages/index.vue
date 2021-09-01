<template>
  <div>
     <v-row>
       <v-col>
          <v-card             
            class="mx-auto"  
            max-width="650"
            outlined
          >
            <v-card-text 
              class="text-italic font-weight-bold text-center blue--text"
            >
              Website designed &amp; built by Patrick Sabry using Nuxt JS and the Vuetify design framework. Design inspired by LinkedIn.com.
            </v-card-text>
         </v-card>
         <ProfileCard />
         <AboutMeCard />
         <AcademicsCard />
         <WorkExperienceCard />
         <ProfessionalProjectsCard />
         <AcademicProjectsCard />
         <SkillsCard />
       </v-col>
     </v-row>
  </div>
</template>

<script>
  import ProfileCard from '@/components/ProfileCard.vue';
  import AboutMeCard from '@/components/AboutMeCard.vue';
  import WorkExperienceCard from '@/components/WorkExperienceCard.vue';
  import AcademicsCard from '@/components/AcademicsCard.vue';
  import ProfessionalProjectsCard from '@/components/ProfessionalProjectsCard.vue';
  import AcademicProjectsCard from '@/components/AcademicProjectsCard.vue';
  import SkillsCard from '@/components/SkillsCard.vue';  

  export default {
    components: {
      ProfileCard,
      AboutMeCard,
      WorkExperienceCard,
      AcademicsCard,
      ProfessionalProjectsCard,
      AcademicProjectsCard,
      SkillsCard,
    },

    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .built-by-text {
    color: blue;
  }
</style>