<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Personal Skills</span>
      </v-col>
      
      <v-col fluid class="text-center" cols="auto">
        <v-row justify-md-2>
          <!-- laravel -->
          <v-card class="mx-4" width="250">
            <v-img
              contain
              height="100"
              src="../assets/laravel.png"
            ></v-img>
            <v-card-title class="headline">
               Laravel
              <v-spacer></v-spacer>
              <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                ></v-rating>
            </v-card-title>
          </v-card>
          
          <!-- vuejs -->
          <v-card class="mx-4" width="250">
            <v-img
              contain
              height="100"
              src="../assets/vuejs.png"
            ></v-img>
            <v-card-title class="headline">
               Vue.Js
              <v-spacer></v-spacer>
              <v-rating
                  :value="4"
                  color="amber"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                ></v-rating>
            </v-card-title>
          </v-card>

          <!-- RPA -->
          <v-card class="mx-4" width="250">
            <v-img
              contain
              height="100"
              src="../assets/uipath.png"
            ></v-img>
            <v-card-title class="headline">
               UiPath
              <v-spacer></v-spacer>
              <v-rating
                  :value="4"
                  color="amber"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                ></v-rating>
            </v-card-title>
          </v-card>
        </v-row>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>         -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rating: 4,
    
    
  }),
};
</script>
