<template>
  <v-card
    id="profile"
    class="mx-auto my-12"
    max-width="650"
    elevation="4"
  >
    <v-img
        class="profile-banner"
        height="250"
        src="/profile-banner.jpg"
    >
        <v-img
            class="profile-pic"
            heigh="100"
            width="150"
            src="/profile-pic.jpg"
        />
    </v-img>

    <div>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-col cols="6">
                <v-card-title class="font-weight-bold">Patrick Sabry</v-card-title>
                <v-card-subtitle>
                    Senior Data Engineer at Transport for NSW <br>
                    Sydney, NSW Australia <br>
                </v-card-subtitle>
            </v-col>
             <v-col 
                cols="3"
                class="text-subtitle-1 website-info"
            >
                <br>
                <v-img 
                    src="/tfnsw.png"
                    width="65"
                    height="55"
                    class="website-logo"
                    alt="https://www.transport.nsw.gov.au/"
                />  
            </v-col>
        </v-row>
        <v-row
            align="center"
            class="mx-0 my-0"
        >
            <v-col cols="2">
                <v-btn
                    class="mx-4"
                    color="info"
                    icon
                    :href="`${linkedin.link}`"
                    target="_blank"
                >
                    <v-icon size="24px">
                        {{ linkedin.icon }}
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col cols="4">
                 <v-btn
                    class="mx-4"
                    color="info"
                    icon
                    :href="`${mail.link}`"
                >
                    <v-icon size="24px">
                        {{ mail.icon }}
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    :loading="loading3"
                    :disabled="loading3"
                    color="info"
                    class="white--text"
                    href="/resume.pdf"
                    target="_blank"
                    >
                    Download my Resume
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-download
                    </v-icon>
                </v-btn>
            </v-col> 
        </v-row>
    </div>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      linkedin: {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/patricksabry/'
      },
      mail: {
          icon: 'mdi-email',
          link: 'mailto:patricksabry@gmail.com'
      },
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
</style>