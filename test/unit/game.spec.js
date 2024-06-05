import { shallowMount } from '@vue/test-utils'
import GamePage from '../../pages/gamePage'

jest.mock('vue-router')
jest.useFakeTimers()

describe('GamePage.vue', () => {
  let wrapper

  beforeEach(() => {
    window.cookieStore = {
      get: jest.fn(),
      set: jest.fn(),
    }
    navigator.vibrate = jest.fn()
    wrapper = shallowMount(GamePage, {
      propsData: {
        difficulty: 'Easy',
      },
      stubs: {
        Confetti: true,
      },
      mocks: {
        $store: {
          state: {
            user: {
              points: 0,
              name: 'Test User',
              difficulty: 'Easy',
            },
          },
        },
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  })

  it('starts the game when created', () => {
    expect(wrapper.vm.gameInterval).not.toBeNull()
  })

  it('ends the game when time is up', () => {
    jest.advanceTimersByTime(60000)
    expect(wrapper.vm.isEndedGame).toBe(true)
  })

  it('restarts the game', () => {
    wrapper.vm.restartGame()
    expect(wrapper.vm.isEndedGame).toBe(false)
    expect(wrapper.vm.timeLeft).toBe(60)
  })

  it('moves the mole', () => {
    const initialMoleIndex = wrapper.vm.moleIndex
    wrapper.vm.moveMole()
    expect(wrapper.vm.moleIndex).not.toBe(initialMoleIndex)
  })

  it('handles click correctly when mole is hit', () => {
    const moleIndex = wrapper.vm.moleIndex
    wrapper.vm.handleClick(moleIndex)
    expect(wrapper.vm.points).toBe(10)
  })

  it('handles click correctly when mole is not hit', () => {
    const moleIndex = (wrapper.vm.moleIndex + 1) % 9
    wrapper.vm.handleClick(moleIndex)
    expect(wrapper.vm.points).toBe(0)
  })
})
