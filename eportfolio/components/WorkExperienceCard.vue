<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="650">
          <v-card-title class="mt-8">
            <p class="ml-3">
              Work Experience
            </p>
          </v-card-title>
          <v-card-subtitle>
              <p class="ml-3">
                I've had the privelage of working in industry for a fair amount of years holding multiple
                different positions.
              </p>
          </v-card-subtitle>
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
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> <br> {{ message.time }}
                </div>
                <div>{{ message.message }}</div>
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
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          time: 'Ozhair & Beauty Pty Ltd',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Junior Data Scientist',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          time: 'CareerOne Pty Ltd',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Testing & Quality Assurance Analyst',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          time: 'CareerOne Pty Ltd',
          color: 'green',
        },
        {
          from: 'Intern Technical Business Analyst',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          time: 'CareerOne Pty Ltd',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
  }
</script>