<template>
  <div>
     <v-row>
       <v-col>
         <ProfileCard />
         <AboutMeCard />
         <WorkExperienceCard />
         <AcademicsCard />
       </v-col>
     </v-row>
  </div>
</template>

<script>
  import ProfileCard from '@/components/ProfileCard.vue';
  import AboutMeCard from '@/components/AboutMeCard.vue';
  import WorkExperienceCard from '@/components/WorkExperienceCard.vue';
  import AcademicsCard from '@/components/AcademicsCard.vue';

  export default {
    components: {
      ProfileCard,
      AboutMeCard,
      WorkExperienceCard,
      AcademicsCard
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