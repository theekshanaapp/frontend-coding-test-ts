import axios from 'axios';

const state = {
    pokemonList: [],
    selectedPokemon: null,
};

const getters = {
    getPokemonList: state => state.pokemonList,
    getSelectedPokemon: state => state.selectedPokemon,
};

const actions = {
    async fetchPokemonList({ commit }) {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            commit('setPokemonList', response.data.results);
        } catch (error) {
            console.error('Error fetching Pokemon list:', error);
        }
    },

    async fetchPokemonDetails({ commit }, id) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            commit('setSelectedPokemon', response.data);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    },
};

const mutations = {
    setPokemonList: (state, pokemonList) => (state.pokemonList = pokemonList),
    setSelectedPokemon: (state, selectedPokemon) => (state.selectedPokemon = selectedPokemon),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
