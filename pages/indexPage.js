export function startGame(name, store, router, selectedDifficulty) {
  if (name) {
    store.commit('setUser', {
      name,
      points: 0,
      difficulty: selectedDifficulty,
    })
    router.push('/game')
  } else {
    return 'Debe introducir un nombre de usuario correcto'
  }
}

export function toggleMusic(audioPlayer, musicStatus) {
  if (musicStatus) {
    audioPlayer.play()
  } else {
    audioPlayer.pause()
  }
}
