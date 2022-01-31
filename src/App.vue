<template>
  <v-app>
    <v-app-bar app color="primary">
     <v-toolbar-title>PI Calsi</v-toolbar-title>
     <v-spacer/>
      <v-switch 
        :value="darkMode" 
        @change="toggleDarkMode" 
        :append-icon="`${switchLabel}`"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-col class="primary">
          <v-card
            elevation="7"
            shaped
            :loading="loading"
            class="mx-auto my-12">
            Hello
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ 
      darkMode: false
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
