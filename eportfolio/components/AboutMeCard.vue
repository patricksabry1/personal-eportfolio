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
                    I am a software engineer from Sydney holding a Bachelor of Software Engineering (Honours) and Diploma in Professional Engineering Practice from the University of Technology, Sydney. <br><br>
                    I am a passionate engineering professional with six years of software industry experience holding a number of technical positions. I have a breadth of knowledge across the entire SDLC, specialising in data-centric backend development. I thoroughly enjoy working in a cohesive team and have a deep understanding of the agile scrum workflow having held technical business analyst positions in the past facilitating scrum. <br><br> 
                    Curiosity has always driven my thought process, striving to understand the inner machinations of how systems work ever since I was a kid (at the cost of many taken apart toys). I think this curiosity drives my desire to make a difference in the world and I believe I can do so at scale with software engineering and impactful project work. 
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