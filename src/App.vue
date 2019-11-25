<template>
  <div class="float-sm-none">
    <v-app>

        <v-parallax height="100%" dark src="./assets/asset2.jpg">
          <v-content>
            <biodata/>
          </v-content>
          <v-content>
            <SE/>
          </v-content>
        
        <!-- <v-parallax dark src="./assets/asset1.jpg"> -->
          <v-content>
            <experiences/>
          </v-content>
          <v-content>
            <conctact/>
          </v-content>
        <!-- </v-parallax>   -->
        </v-parallax> 
        <v-footer absolute height="auto" color="#004242">  
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
  }),
};
</script>
