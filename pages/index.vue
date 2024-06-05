<template>
  <v-container class="fill-height" fluid>
    <v-row class="fill-height ma-0">
      <v-col cols="12" class="d-flex align-start justify-start pa-0">
        <v-btn medium icon @click="musicClick">
          <v-img
            contain
            :src="musicStatus ? 'musicOn.png' : 'musicOff.png'"
            width="48"
            height="48"
          />
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-row align="start" justify="center" class="fill-height">
          <IndexCard :locales="locales" :name="name" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import locales from '../assets/locales/locales.json'
import IndexCard from '../components/IndexCard.vue'
import '../assets/styles/indexPage.scss'
import { toggleMusic } from '../pages/indexPage'
export default {
  components: {
    IndexCard,
  },
  data() {
    return {
      name: '',
      locales,
      musicStatus: false,
      audioPlayer: new Audio('nature.mp3'),
    }
  },
  methods: {
    musicClick() {
      this.musicStatus = !this.musicStatus
      toggleMusic(this.audioPlayer, this.musicStatus)
    },
  },
}
</script>
