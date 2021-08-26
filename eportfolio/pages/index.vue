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
              Website designed &amp; built by Patrick Sabry using Nuxt JS and the Vuetify design framework
            </v-card-text>
         </v-card>
         <ProfileCard />
         <AboutMeCard />
         <WorkExperienceCard />
         <ProjectsCard />
         <SkillsCard />
         <AcademicsCard />
         <ResumeCard />
       </v-col>
     </v-row>
  </div>
</template>

<script>
  import ProfileCard from '@/components/ProfileCard.vue';
  import AboutMeCard from '@/components/AboutMeCard.vue';
  import WorkExperienceCard from '@/components/WorkExperienceCard.vue';
  import AcademicsCard from '@/components/AcademicsCard.vue';
  import ProjectsCard from '@/components/ProjectsCard.vue';
  import SkillsCard from '@/components/SkillsCard.vue';  
  import ResumeCard from '@/components/ResumeCard.vue';  

  export default {
    components: {
      ProfileCard,
      AboutMeCard,
      WorkExperienceCard,
      AcademicsCard,
      ProjectsCard,
      SkillsCard,
      ResumeCard
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