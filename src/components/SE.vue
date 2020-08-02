<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Personal Skills</span>
      </v-col>
            
      <!-- coloumn1 -->
      <v-col fluid class="text-center" cols="auto">
        <v-row justify-md-2>
          <!-- laravel -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img contain height="100" src="../assets/laravel.png"></v-img>
            <v-card-title class="headline">
               <span class="pl-16" >Laravel</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="4"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>
          
          <!-- vuejs -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/vuejs.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">Vue.Js</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3.5"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>

          <!-- Vuetify -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/vuetify.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">Vuetify</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>

          <!-- Javascript -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/js.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-11">Javascript</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3.5"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>
        </v-row>
      </v-col>

      <!-- coloumn2 -->
      <v-col fluid class="text-center" cols="auto">
        <v-row justify-md-2>
          <!-- Selenium -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/selenium.png"
            ></v-img>
            <v-card-title class="headline">
                <span class="pl-14" >Selenium</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>
          
          <!-- IoT -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/iot.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-2">Internet of Things</span>
                <v-spacer></v-spacer>
                <v-rating
                    :value="3"
                    color="yellow"
                    background-color="orange lighten-3"
                    dense
                    light
                    half-increments
                    readonly
                    size="28"
                    class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>

          <!-- RPA -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/uipath.png"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-16">UiPath</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="4"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>

          <!-- Outsystems -->
          <v-card class="py-4 pa-2 mx-4" height="210" width="250">
            <v-img
              contain
              height="100"
              src="../assets/outsystems.jpg"
            ></v-img>
            <v-card-title class="headline">
               <span class="pl-10">Outsystems</span>
                <v-spacer></v-spacer>
                <v-rating
                  :value="3"
                  color="yellow"
                  background-color="orange lighten-3"
                  dense
                  light
                  half-increments
                  readonly
                  size="28"
                  class="pl-6"
                  ></v-rating>
            </v-card-title>
          </v-card>
        </v-row>
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
