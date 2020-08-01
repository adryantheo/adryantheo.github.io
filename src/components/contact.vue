<template>
  <v-container grid-list-lg class="my-3">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <span class="display-1">Contact Person</span>
      </v-col>
      <v-col fluid class="text-center" cols="6" md="4">
        <v-row justify-md-4>
          <a href="https://github.com/adryantheo/"><v-img src="../assets/github.png" max-height="60" max-width="60"></v-img></a>
          <v-spacer></v-spacer>
          <a href="https://www.linkedin.com/in/adryan-theo-3b881b193/"><v-img src="../assets/linkedin.png" max-height="60" max-width="60"></v-img></a>
          <v-spacer></v-spacer>
          <v-img src="../assets/gmail.png" max-height="60" max-width="60" @click="popUp()"></v-img>
          <v-spacer></v-spacer>
          <a href="https://wa.me/628170540590"><v-img src="../assets/wa.png" max-height="60" max-width="60"></v-img></a>

        <v-dialog v-model="dialog" max-width="400">
        <v-card max-width="400">
          <v-card-title>
            Email Address
            <v-spacer></v-spacer>
            <v-icon v-clipboard:copy="myEmail" @click="myAlert()">content_copy</v-icon>
          </v-card-title>
          <v-card-text>
            <span>adryantheo@gmail.com</span> 
          </v-card-text>
        </v-card>
      </v-dialog>

      
                 

        </v-row>
          
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>         -->
      </v-col>

      


    </v-row>
    <v-alert dense="true" :value="alert" type="info" max-width="270" dismissible="true">Coppied to clipboard </v-alert>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    myEmail: "adryantheo@gmail.com",
    alert:false,
    
  }),
  methods:{
    popUp(){
      this.dialog = true;
    },
    myAlert(){
      this.alert = true;
      this.dialog = false;
      setTimeout(()=>{
        this.alert=false
      },1000)
    }
  },
};
</script>
