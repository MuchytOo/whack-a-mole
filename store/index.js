export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  incrementPoints(state, points) {
    state.user.points += points
  },
  decrementPoints(state) {
    state.user.points -= 1
  },
}
