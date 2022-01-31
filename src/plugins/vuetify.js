import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.lighten3,
        secondary: colors.orange
      },
      dark: {
        primary: colors.cyan,
        secondary: colors.pink
      },
    },
  },
});
