<script>
import Confetti from '../components/Confetti.vue'
import GamePage from './gamePage.js'
import '../assets/styles/gamePage.scss'
export default {
  ...GamePage,
  components: {
    Confetti,
  },
  props: {
    difficulty: {
      type: String, // o el tipo que corresponda
      required: true,
    },
  },
}
</script>

<template>
  <div class="game-container">
    <div class="header">
      <router-link to="/" class="home-link return-button">
        <img src="../static/back-arrow.png" alt="Home" />
      </router-link>
      <div class="user-info">
        <span class="user-name">{{ userName }}</span>
        <span class="separator"></span>
        <span class="points"> {{ points }}</span>
        <span class="separator"></span>
        <span class="remaining-time">{{ timeLeft }} s</span>
        <span class="separator"></span>
      </div>
      <div class="difficulty-container">
        <span class="difficulty">{{ difficulty }}</span>
      </div>
    </div>
    <div v-if="!isEndedGame" class="grid-container">
      <div class="grid">
        <div
          v-for="(cell, index) in cells"
          :key="index"
          class="cell"
          @click="handleClick(index)"
        >
          <div class="mole-container">
            <img
              v-if="index === moleIndex"
              class="mole"
              src="../static/mole.png"
              alt="Mole"
            />
            <img
              class="mole-hole"
              src="../static/mole-hole.png"
              alt="Mole hole"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="game-over-container">
      <div class="game-over">
        <h1>¡Juego terminado!</h1>
        <h2>Has conseguido {{ points }} puntos</h2>
        <button class="restart-button" @click="restartGame">
          Volver a jugar
        </button>
      </div>
      <div class="scores">
        <div class="table-container">
          <h2>Puntuaciones:</h2>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="score in scores" :key="score.user">
                <td>{{ score.user }}</td>
                <td>{{ score.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Confetti v-if="isEndedGame" />
  </div>
</template>
