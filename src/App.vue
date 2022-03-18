<template>
  <v-app>
    <v-app-bar app  @click.capture="$refs.footSwitch.switchShadow()" >
     <v-toolbar-title>PI Calsi</v-toolbar-title>
     <v-spacer/>
      <v-switch 
        :value="darkMode" 
        @change="toggleDarkMode" 
        :append-icon="`${switchLabel}`"
      ></v-switch>
    </v-app-bar>
    <v-main  @click.capture="$refs.footSwitch.switchShadow()" >
      <v-container  @click.capture="$refs.footSwitch.switchShadow()">
        <v-row dense>
          <v-divider></v-divider>
            <h5>{{sub_header}}</h5>
          <v-divider></v-divider>
        </v-row>
        <v-row class="primary">
          <v-card
            elevation="7"
            shaped
            style="height:450px">
          </v-card>
        </v-row>
      </v-container>
    </v-main>
    <footerz ref="footSwitch"/>
  </v-app>
</template>

<script>
import one from './components/footer.vue';
export default {
  components: { 
    'footerz' : one
    },
  name: 'App',
  data: () => ({ 
      darkMode: false,
      sub_header : "The prices are from Coin Market Cap, can be updated after selection of coin/symbol"
    }),
    methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
    },
    computed: {
      switchLabel: function () {
        return this.darkMode ? '🌙':'☀️';
      }
    }
};
</script>
