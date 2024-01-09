<template>
    <div class="pokemon-list-container">
        <h2 class="text-3xl font-bold mb-6">Explore Pokemon</h2>
        <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <li v-for="(pokemon, index) in pokemonList" :key="pokemon.name" class="mb-4">
                <router-link :to="{ name: 'pokemon-detail', params: { id: index+1 } }"
                    class="block p-6 border rounded-md bg-white hover:shadow-md transition duration-300 ease-in-out">
                    <div class="flex justify-center mb-4">
                        <img :src="getPokemonImage(pokemon.url)" :alt="pokemon.name" class="w-20 h-20 object-contain" />
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-semibold text-blue-500">{{ formatPokemonName(pokemon.name) }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    computed: {
        pokemonList() {
            return this.$store.getters.getPokemonList;
        },
    },
    mounted() {
        this.fetchPokemonList();
    },
    methods: {
        async fetchPokemonList() {
            try {
                await this.$store.dispatch('fetchPokemonList');
                // Simulating a successful
                toast("Pokemon loaded successfully!", { autoClose: 1000, "theme": "auto", "type": "success", "transition": "slide", "dangerouslyHTMLString": true });
            } catch (error) {
                // Simulating a failed
                toast("Failed to load Pokemon!", { autoClose: 1000, "theme": "auto", "type": "error", "transition": "slide", "dangerouslyHTMLString": true })
            }
        },
        getPokemonImage(url) {
            const id = url.match(/\/(\d+)\//)[1];
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        },
        formatPokemonName(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        },
    },
};
</script>
  
<style scoped>
.pokemon-list-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* Customize the appearance of the router-link */
.router-link-exact-active {
    border-color: #3490dc;
}
</style>
  