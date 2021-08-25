<template>
  <v-card
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

    <v-img
        class="profile-banner"
        height="250"
        src="https://media-exp1.licdn.com/dms/image/C5616AQFalbMY4-nbpA/profile-displaybackgroundimage-shrink_200_800/0/1517602174533?e=1635379200&v=beta&t=3D3Oy2RWDdjcIzolq2sxbps2qtuQxPwY3S-pPAP4bCc"
    >
        <v-img
            class="profile-pic"
            heigh="100"
            width="150"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGLG4BVQ9IPaQ/profile-displayphoto-shrink_200_200/0/1517602173837?e=1635379200&v=beta&t=xasfuw-Pko2oBTSZY_Vx09JxspUvaxzZ-jLKjQcHrY0"
        />
    </v-img>

    <div>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="6">
                <v-card-title>Patrick Sabry</v-card-title>
                <v-card-subtitle>
                    Software Engineer at CareerOne <br>
                    Sydney, NSW Australia
                </v-card-subtitle>
            </v-col>
             <v-col 
                cols="2"
                class="text-subtitle-1 website-info"
            >
                <br>
                <v-img 
                    src="https://media-exp1.licdn.com/dms/image/C560BAQG_-23cABSkHw/company-logo_100_100/0/1553810420696?e=1637798400&v=beta&t=xvDb3AQRpvvJqOt__NbtjmGbqUJCxdzMYsBsawh8tSQ"
                    width="45"
                    height="45"
                    class="website-logo"
                />  
            </v-col>
            <v-col>
                <span><a href="https://www.careerone.com.au">Careerone.com.au</a></span>
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