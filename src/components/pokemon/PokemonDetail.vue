<template>
    <div class="pokemon-detail-container">
        <h2 class="text-3xl font-bold mb-6 text-center">Pokemon Detail</h2>
        <div v-if="selectedPokemon" class="pokemon-card p-6 border rounded-md bg-white shadow-md">
            <div class="flex items-center justify-center mb-4">
                <img :src="getPokemonImage(selectedPokemon.id)" :alt="selectedPokemon.name"
                    class="w-32 h-32 object-cover rounded-full" @load="imageLoaded" v-show="imageLoadedFlag" />
                <div v-show="!imageLoadedFlag" class="w-32 h-32 object-cover bg-gray-200 animate-pulse rounded-full"></div>
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-indigo-700">{{ selectedPokemon.name }}</h3>
            <div class="flex flex-col text-gray-700">
                <p class="mb-2"><strong>Height:</strong> {{ selectedPokemon.height }} dm</p>
                <p class="mb-2"><strong>Weight:</strong> {{ selectedPokemon.weight / 10 }} kg</p>
                <p><strong>Base Experience:</strong> {{ selectedPokemon.base_experience }}</p>
            </div>
            <!-- Improved styles for details section -->
            <div class="text-left border-t pt-4 mt-4">
                <p class="mb-2"><strong>Forms:</strong> {{ formatArray(selectedPokemon.forms, 'name') }}</p>
                <p><strong>Ability:</strong> {{ formatAbility(selectedPokemon.abilities, 'ability') }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    data() {
        return {
            imageLoadedFlag: false,
        };
    },
    computed: {
        selectedPokemon() {
            return this.$store.getters.getSelectedPokemon;
        },
    },
    mounted() {
        this.fetchPokemonDetails();
    },
    methods: {
        async fetchPokemonDetails() {
            try {
                const pokemonId = this.$route.params.id;
                await this.$store.dispatch('fetchPokemonDetails', pokemonId);
                const imageUrl = await this.getPokemonImage(this.selectedPokemon.id);
                // Simulating a successful
                toast("Pokemon Details loaded successfully!", { autoClose: 1000, "theme": "auto", "type": "success", "transition": "slide", "dangerouslyHTMLString": true });
            } catch (error) {
                // Simulating a failed
                toast("Failed to load Pokemon Details!", { autoClose: 1000, "theme": "auto", "type": "error", "transition": "slide", "dangerouslyHTMLString": true })
            }
        },
        formatArray(array, key) {
            return array.map(item => item[key]).join(', ');
        },
        formatAbility(array, key) {
            return array.map(item => item[key].name).join(', ');
        },
        getPokemonImage(id) {
            if (id) {
                const imageUrl = id
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                    : '';

                return imageUrl;
            }

            return '';
        },
        imageLoaded() {
            this.imageLoadedFlag = true;
        },
    },
};
</script>
<style scoped>
.pokemon-detail-container {
    width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.pokemon-card {
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.pokemon-card:hover {
    transform: scale(1.02);
}
</style>