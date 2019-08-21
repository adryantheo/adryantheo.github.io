<template>
  <v-app>
    <v-app-bar app>
      
    </v-app-bar>

    <v-content>
      <CV/>
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
import CV from './components/cv';

export default {
  name: 'App',
  components: {
    CV,
  },
  data: () => ({
    //
  }),
};
</script>
