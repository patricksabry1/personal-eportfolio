<template>
  <div>
     <v-row>
       <v-col>
         <ProfileCard />
         <AboutMeCard />
         <AcademicsCard />
         <WorkExperienceCard />
         <SkillsCard />
         <ProfessionalProjectsCard />
         <AcademicProjectsCard />
         <ResearchCard />
         <LeadershipCard />
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
  import ResearchCard from '@/components/ResearchCard.vue';  
  import LeadershipCard from '@/components/LeadershipCard.vue';  

  export default {
    components: {
      ProfileCard,
      AboutMeCard,
      WorkExperienceCard,
      AcademicsCard,
      ProfessionalProjectsCard,
      AcademicProjectsCard,
      SkillsCard,
      ResearchCard,
      LeadershipCard,
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