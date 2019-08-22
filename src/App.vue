<template>
  <v-app>
    <!-- <v-app-bar app>
      
    </v-app-bar> -->

    <v-content>
      <biodata/>
    </v-content>
     <v-content>
      <SE/>
    </v-content>
     <v-content>
      <experiences/>
    </v-content>
     <v-content>
      <conctact/>
    </v-content>
    
    <v-footer absolute height="auto" color="indigo">          
              
        <v-flex
        indigo
        py-3
        text-center
        white--text
        xs12
        >
        &copy;2019 — <strong><a href="https://github.com/adryantheo" style="color: white">Adryan Theo</a></strong>
        </v-flex>          
    </v-footer>
  </v-app>
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
