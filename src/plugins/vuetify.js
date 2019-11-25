import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  themes:{
    light:{
      primary: '#004242',
    }
  },
  icons: {
    iconfont: 'md',
  },
});
