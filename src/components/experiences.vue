<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Experiences</span>
      </v-col>
      <v-col class="text-center" cols="8">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          
          <!-- 2016 -->
            <v-timeline-item color="purple lighten-2" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2016"></span>
              </template>
              <v-card>
                <v-card-title class="purple lighten-2">
                  <v-icon dark size="42" class="mr-4">mdi-school</v-icon>
                  <h2 class="display-1 white--text font-weight-light">College</h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <p>Start Studying at Atma Jaya Yogyakarta University (UAJY) </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="amber lighten-1" fill-dot left small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2017"></span>
              </template>
              <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                  <h2 class="display-1 mr-4 white--text font-weight-light">Organizational</h2>
                  <v-icon dark size="42">groups</v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <p>Vice President at Kelompok Studi Linux (KSL) (2017-2018)</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item color="cyan lighten-1" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2018"></span>
              </template>
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon class="mr-4" dark size="42">public</v-icon>
                  <h2 class="display-1 white--text font-weight-light">Activities</h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <p>- Leader of National Workshop "Cyber Crime and Digital Forensic"</p>
                      <p>- Tutor for Programming Extracurricular at Pangudi Luhur Yogyakarta High School (2018-2020)</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="red lighten-1" fill-dot left small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2019"></span>
              </template>
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h2 class="display-1 mr-4 white--text font-weight-light">Activities</h2>
                  <v-icon dark size="42">
                    mdi-account-multiple-outline
                  </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <p>- High School Food Bazzard Application Using Vue.js and Laravel as Back-End Engineer</p>
                      <p>- Ticket Sales Application for High School's Event Using Vue.js and Laravel as Full Stack Developer</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="green lighten-1" fill-dot right small>
              <template v-slot:opposite>
                <span :class="`headline font-weight-bold white--text`" v-text="2020"></span>
              </template>
              <v-card>
                <v-card-title class="green lighten-1">
                  <v-icon class="mr-4" dark size="42">person</v-icon>
                  <h2 class="display-1 white--text font-weight-light">Existing</h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col>
                      <p>- Intern at Astra Credits Companies as Software Engineer (Jan - July)</p>
                      <p>- Graduated from Atma Jaya Yogyakarta University (June)</p>
                      <p>- Freelance at Astra Credits Companies as Mobile Engineer (July) </p>
                      <p>- Working at PT. Enseval Putra Megatrading as E-Commerce Developer (August - Now) </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>
