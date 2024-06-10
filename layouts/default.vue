<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Whack a mole',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Game',
          to: '/game',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      selectedDifficulty: 'Easy',
      methods: {
        updateDifficulty(difficulty) {
          this.selectedDifficulty = difficulty
        },
      },
    }
  },
}
</script>
