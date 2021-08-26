<template>
  <v-container id="work-experience">
    <v-row justify="space-around">
      <v-card 
        width="650"
        elevation="4"
      >
        <v-row
          align="center"
          class="mx-0 my-2"
        >
            <v-col cols="auto">
                <v-card-title class="font-weight-bold">Work Experience</v-card-title>
            </v-col> 
        </v-row>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Current
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-black">
                  <strong><h2>{{ message.from }}</h2> {{ message.company }}</strong> <br>
                  {{ message.time }}
                </div>
                <div 
                    class="message-text font-weight-medium" 
                    style="white-space: pre-line"
                >
                    <p class="word-wrap">{{ message.message }}</p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'Data Engineer',
          message: 'Spearheading an exciting new data department and building out a business intelligence unit. Formulating and implementing a hollistic data governeance strategy including the development of a data warehouse, ETL pipelines, data viz platform and more.',
          company: 'Oz Hair & Beauty Pty Ltd',
          time: 'Current',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Junior Data Scientist',
          message: 'Developed backend microservices, data modeling, and front-end work pertaining to core systems development. PHP Laravel, MySQL, Node\/Vue.\r\n\r\nResponsible for the end-to-end development and deployment of CareerOne\'s machine learning function for its brand new platform. Duties and achievements include:\r\n- Data visualisation and supporting analytics for day-to-day business operations.\r\n- Development and integration of data ETL pipelines with existing core systems for use in statistical and ML models (Python).\r\n- Data mining and predictive modeling to provide industry insights into job-centric data.\r\n- Productionization and deployment of machine learning solutions for use in the brand\'s core product.',
          company: 'CareerOne Pty Ltd',
          time: 'Nov 2018 - August 2021',
          color: 'green darken-3',
        },
        {
          from: 'Testing & Quality Assurance Analyst',
          message: 'Agile BA, product testing, test lifecycle management, execution & documentation, end to end test co-ordination across business units.\r\n\r\nData modeling and analytics. Supporting business operations & management through reporting and data visualization.\r\n\r\nSuccessful delivery of a major legacy platform transformation project playing an integral role in data validation and software quality control throughout the project lifecycle.',
          company: 'CareerOne Pty Ltd',
          time: 'Jan 2018 - Nov 2018',
          color: 'green darken-1',
        },
        {
          from: 'Intern Technical Business Analyst',
          message: 'Project co-ordination, business requirements analysis/modelling , software QA documenting & testing, JIRA administration',
          company: 'CareerOne Pty Ltd',
          time: 'Sep 2016 - Feb 2017',
          color: 'green lighten-2',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
    .message-text {
        margin-top: 5px;
    }

    .word-wrap {
        word-wrap: break-word;
        width: 460px;
    }
</style>