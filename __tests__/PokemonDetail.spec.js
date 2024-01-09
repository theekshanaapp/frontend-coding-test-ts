// __tests__/PokemonDetail.spec.js
import { mount } from '@vue/test-utils';
import PokemonDetail from '@/path-to-your-component/PokemonDetail.vue';

describe('PokemonDetail.vue', () => {
  it('renders PokemonDetail component', () => {
    const wrapper = mount(PokemonDetail);
    expect(wrapper.exists()).toBe(true);
  });
});
