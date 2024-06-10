<template>
  <transition name="fade">
    <v-card class="elevation-12">
      <v-toolbar
        color="#26bae2"
        class="d-flex align-center justify-center pa-0"
        dark
        flat
      >
        <v-toolbar-title class="text-center">{{
          locales.welcomeMessage
        }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form @submit.prevent="clickStartGame">
          <v-text-field
            v-model="localName"
            :label="locales.enterName"
            required
          ></v-text-field>
          <p v-if="inputError" class="errorInput">{{ errorMsg }}</p>
          <div class="difficulty-container">
            <span>Dificultad: </span>
            <select v-model="selectedDifficulty" class="difficulty-selector">
              <option value="Easy">{{ locales.easy }}</option>
              <option value="Medium">{{ locales.medium }}</option>
              <option value="Hard">{{ locales.hard }}</option>
            </select>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>

            <div class="mt24">
              <v-btn color="#26bae2" class="white--text" type="submit">{{
                locales.startGame
              }}</v-btn>
            </div>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </transition>
</template>

<script>
import { startGame } from '../pages/indexPage'
export default {
  name: 'IndexCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    locales: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localName: this.name,
      selectedDifficulty: 'Easy',
      errorMsg: '',
      inputError: false,
    }
  },
  methods: {
    clickStartGame() {
      this.errorMsg = startGame(
        this.localName,
        this.$store,
        this.$router,
        this.selectedDifficulty
      )
      if (this.errorMsg) {
        this.inputError = true
      }
    },
  },
}
</script>
