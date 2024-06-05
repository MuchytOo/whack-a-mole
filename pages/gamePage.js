export default {
  data() {
    return {
      user: null,
      cells: Array(9).fill(null),
      moleIndex: 1,
      difficulty: 'Easy',
      points: 0,
      userName: '',
      gameDuration: 15,
      timeLeft: 15,
      gameInterval: null,
      records: [],
      scores: [],
      isEndedGame: false,
      successSound: new Audio('/success.mp3'),
      failSound: new Audio('/fail.mp3'),
    }
  },
  created() {
    this.user = this.$store.state.user
    this.points = this.user.points
    this.userName = this.user.name
    this.difficulty = this.user.difficulty
    this.startGame()
  },
  methods: {
    async endGame() {
      clearInterval(this.gameInterval)
      clearInterval(this.moleInterval)
      this.isEndedGame = true
      this.scores = await window.cookieStore.get('scores')
      this.scores = this.scores ? JSON.parse(this.scores.value) : []
      if (this.scores.length >= 10) {
        this.scores.pop()
      }
      this.scores.unshift({ user: this.userName, points: this.points })
      window.cookieStore.set('scores', JSON.stringify(this.scores))
    },
    startGame() {
      this.moveMole()
      this.gameInterval = setInterval(() => {
        this.timeLeft--
        if (this.timeLeft <= 0) {
          this.endGame()
        }
      }, 1000)
    },
    restartGame() {
      this.isEndedGame = false
      this.timeLeft = 15
      this.points = 0
      this.startGame()
    },
    beforeDestroy() {
      this.endGame()
    },

    vibratePhone() {
      navigator.vibrate(200)
    },
    moveMole() {
      clearInterval(this.moleInterval)
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * this.cells.length)
      } while (newIndex === this.moleIndex)
      this.moleIndex = newIndex
      let timeout
      switch (this.difficulty) {
        case 'Easy':
          timeout = 1000
          break
        case 'Medium':
          timeout = 750
          break
        case 'Hard':
          timeout = 500
          break
      }
      this.moleInterval = setInterval(() => {
        this.moveMole()
      }, timeout)
    },
    handleClick(index) {
      this.failSound.pause()
      this.failSound.currentTime = 0
      this.successSound.pause()
      this.successSound.currentTime = 0
      if (index === this.moleIndex) {
        this.points = this.points + this.getPoints()
        this.vibratePhone()
        this.successSound.play()
        clearInterval(this.moleInterval)
        this.moveMole()
      } else {
        this.failSound.play()
      }
    },
    getPoints() {
      switch (this.difficulty) {
        case 'Easy':
          return 10
        case 'Medium':
          return 20
        case 'Hard':
          return 30
      }
    },
  },
}
