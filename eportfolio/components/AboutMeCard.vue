<template>
  <v-card
    id="about-me"
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
                <v-card-title class="font-weight-bold">About Me</v-card-title>
            </v-col> 
        </v-row>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="11" class="ml-7">
                <p>
                    Hi, my name is Patrick! <br><br>
                    I am a final year student studying a Bachelor of Software Engineering, Diploma in Professional Engineering Practice at UTS, sub majoring in data analytics. <br><br>
                    I am a passionate engineering professional with over four years of software industry experience holding a number of technical positions. <br><br> 
                    Curiosity has always driven my thought process, striving to understand the inner machinations of how systems work ever since I was a kid (at the cost of many taken apart toys). Nowadays I have a keen interest in leveraging the power of software and data to drive innovation and growth in businesses and society as a whole.
                    I truly want to make a difference in the world and I believe I can do so at scale with software engineering. I enjoy solving real world problems and fostering an inclusive team enviornment through impactful project work. 
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
</style>