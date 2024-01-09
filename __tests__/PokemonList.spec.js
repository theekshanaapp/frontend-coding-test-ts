// __tests__/PokemonList.spec.js
const { mount } = require('@vue/test-utils');
const PokemonList = require('@/components/PokemonList.vue').default;

describe('PokemonList.vue', () => {
  it('renders a list of Pokemon', () => {
    const wrapper = mount(PokemonList, {
      props: {
        pokemonList: [{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }],
      },
    });

    expect(wrapper.findAll('.pokemon-item')).toHaveLength(1);
  });
});
