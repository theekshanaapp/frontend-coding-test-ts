import { createStore } from 'vuex';
import pokemonModule from './modules/pokemonModule';

const store = createStore({
  modules: {
    pokemonModule,
  },
});

export default store;