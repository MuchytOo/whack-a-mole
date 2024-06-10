import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import IndexCard from '../../components/IndexCard.vue'
import { startGame } from '../../pages/indexPage'

jest.mock('../../pages/indexPage', () => ({
  startGame: jest.fn(),
}))

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('IndexCard.vue', () => {
  let vuetify
  let wrapper

  beforeEach(() => {
    vuetify = new Vuetify()

    wrapper = shallowMount(IndexCard, {
      localVue,
      vuetify,
      propsData: {
        locales: {},
        name: '',
      },
      data() {
        return {
          localName: '',
          selectedDifficulty: 'Easy',
          errorMsg: '',
          inputError: false,
        }
      },
      mocks: {
        $store: {
          commit: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('executes startGame when name is provided', () => {
    wrapper.vm.localName = 'Test User'
    wrapper.vm.clickStartGame()
    expect(startGame).toHaveBeenCalledWith(
      'Test User',
      wrapper.vm.$store,
      wrapper.vm.$router,
      'Easy'
    )
  })
})
