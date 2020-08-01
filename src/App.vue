<template>
  <div class="float-sm-none">
    <v-app>
        <v-parallax height="100%" dark src="./assets/asset1.jpg">
          <v-content>
            <biodata/>
          </v-content>

          <keep-alive>
          <v-lazy v-model="isActive" :options="{threshold: 1}" min-height="200" transition="fade-transition">
            <v-content>
              <SE/>
            </v-content>
          </v-lazy>
          </keep-alive>
          
        
        <!-- <v-parallax dark src="./assets/asset1.jpg"> -->
          <keep-alive>
          <v-lazy
            v-model="isActive2"
            :options="{
              threshold: 1
            }"
            min-height="200"
            transition="fade-transition"
          >
          <v-content>
            <experiences/>
          </v-content>
          </v-lazy>
          </keep-alive>


          <keep-alive>
          <v-lazy
          v-model="isActive3"
          :options="{
            threshold: 1
          }"
          min-height="200"
          transition="fade-transition"
          >
          <v-content>
            <conctact/>
          </v-content>
          </v-lazy>
          </keep-alive>

          
        <!-- </v-parallax>   -->
        </v-parallax> 
        <v-footer height="auto" color="#004242">  
            <v-flex
            py-3
            text-center
            white--text
            xs12
            >
            &copy;2019 — <strong><a href="https://github.com/adryantheo" style="color: white">Adryan Theo</a></strong>
            </v-flex>          
        </v-footer>
    </v-app>
  </div>
</template>

<script>
import biodata from './components/biodata';
import SE from './components/SE';
import experiences from './components/experiences';
import conctact from './components/contact';

export default {
  name: 'App',
  components: {
    biodata,
    SE,
    experiences,
    conctact,
  },
  data: () => ({
    //
    isActive:false,
    isActive2:false,
    isActive3:false,
  }),
};
</script>
