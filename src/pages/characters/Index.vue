<script>
import axios from 'axios';
import store from '../../store';


  export default {
    data() {
      return {
        characters: null
      }
    },

    methods: {
      fetchCharacters() {
        axios
          .get(`${store.BASE_URL}/characters`)
          .then((res) => {
            this.characters = res.data.results
          })
      }
    },
    
    created() {
      this.fetchCharacters();
    },
  }
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="characters-wrapper">
        <div class="character-card" v-for="character in characters" :key="character.id">
          <div class="character-card__header" >
            <h4>{{ character.name }}</h4>
          </div>
          <div class="character-card__body">
            <ul class="stats">
              <li><span>Def: </span>{{ character.def }}</li>
              <li><span>Speed: </span>{{ character.speed }}</li>
              <li><span>Hp: </span>{{ character.hp }}</li>
            </ul>
          </div>
          <div class="character-card__footer">
            <router-link :to="{ name: 'characters.show', params: { id: character.id } }">More</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/vars' as *;
.characters-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  .character-card {
    border: 1px solid $black;
    border-radius: 30px;

    &__header {
      background-color: $grey;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      padding: 20px 10px 10px 20px;
      text-transform: capitalize;
    }

    &__body {
      padding: 10px 20px 10px 20px;

      .stats {
        & > * {
          margin-bottom: 10px;
        }
      }
    }

    &__footer {
      text-align: center;
      padding: 10px 0;
    }
  }
}
</style>