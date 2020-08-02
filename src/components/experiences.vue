<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Experiences</span>
      </v-col>
      <v-col class="text-center" cols="8">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">

        <v-timeline-item color="purple lighten-2" fill-dot right small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold black--text`" v-text="2016"></span>
          </template>
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-icon dark size="42" class="mr-4">
                mdi-school
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">Masuk Kuliah</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="amber lighten-1" fill-dot left small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold black--text`" v-text="2017"></span>
          </template>
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
              <v-icon
                dark
                size="42"
              >mdi-home-outline</v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="8">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                </v-col>
                <v-col cols="12" md="4">
                  Lorem ipsum dolor sit amet, no nam oblique veritus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="cyan lighten-1" fill-dot right>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold black--text`" v-text="2018"></span>
          </template>
          <v-card>
            <v-card-title class="cyan lighten-1">
              <v-icon class="mr-4" dark size="42">
                mdi-email-outline
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">Title 3</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col v-for="n in 3" :key="n" cols="12" md="4">
                  Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="red lighten-1" fill-dot left small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold black--text`" v-text="2019"></span>
          </template>
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
              <v-icon
                dark
                size="42"
              >
                mdi-account-multiple-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col class="hidden-sm-and-down" md="2">
                  <v-icon size="64">mdi-server-network</v-icon>
                </v-col>
                <v-col cols="12" md="10">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="green lighten-1" fill-dot right small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold black--text`" v-text="2020"></span>
          </template>
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon
                class="mr-4"
                dark
                size="42"
              >
                mdi-phone-in-talk
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">Title 5</h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
    </v-timeline>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>         -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
    //  years: [
    //     {
    //       color: 'black',
    //       year: '2016',
    //     },
    //     {
    //       color: 'black',
    //       year: '2017',
    //     },
    //     {
    //       color: 'black',
    //       year: '2018',
    //     },
    //     {
    //       color: 'black',
    //       year: '2019',
    //     },
    //     {
    //       color: 'black',
    //       year: '2000',
    //     },
    //   ],
    
  }),
};
</script>
