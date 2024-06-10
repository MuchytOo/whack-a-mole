<template>
  <div ref="confetti" class="confetti-container"></div>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
  name: 'FallingConfetti',
  mounted() {
    confetti({
      particleCount: 200,
      spread: 200,
      origin: { y: 0 },
    })
  },
}
</script>

<style scoped>
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
