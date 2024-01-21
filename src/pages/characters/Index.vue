<script>
import axios from 'axios';
import store from '../../store';
import PageLoader from '../../components/PageLoader.vue';


  export default {
    components:{
      PageLoader
    },

    data() {
      return {
        characters: null,
        listOfTypes: null,
        filteredTypes: [] 
      }
    },

    methods: {
      fetchCharacters() {
        axios
          .get(`${store.BASE_URL}/characters`, {
            params: {
              arrFilteredTypes: this.filteredTypes
            }
          })
          .then((res) => {
            this.characters = res.data.results
          })
      },

      fetchTypes() {
        axios
          .get(`${store.BASE_URL}/types`)
          .then((res) => {
            this.listOfTypes = res.data.results
          })
      }
    },
    
    created() {
      this.fetchCharacters();
      this.fetchTypes();
    },
  }
</script>

<template>
  <div class="content-wrapper" v-if="characters && listOfTypes">
    <aside class="sidebar">
      <h5 class="filter-title">Filtra i personaggi</h5>
      <form class="filter-form" @submit.prevent="fetchCharacters">
        <div class="checkboxes-wrap">
          <div class="check-type" v-for="currType in listOfTypes" :key="currType.id">
            <label :for="currType.slug">{{ currType.name }}</label>
            <input v-model="filteredTypes" type="checkbox" name="typesSelected" :id="currType.slug" :value="currType.id">
          </div>
        </div>
        <input class="filter-submit" type="submit" value="Filtra">
      </form>
    </aside>
    <section class="section main-content">
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
              <div class="type">Type ==>{{ character.type.name }}</div>
            </div>
            <div class="character-card__footer">
              <router-link :to="{ name: 'characters.show', params: { id: character.id } }">More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- loader in attesa della risposta dal back-end -->
  <PageLoader v-else/>
</template>

<style lang="scss" scoped>
@use '../../style/partials/vars' as *;

.content-wrapper {
  display: flex;
  .sidebar {
    flex-basis: 300px;
    border-right: 2px solid $black;
    padding: 10px 5px 10px;

    .filter-title {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 24px;
    }

    .filter-form {
      
      .checkboxes-wrap {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 10px;
        margin-bottom: 10px;
      }

      .filter-submit {
        background-color: $primary;
        color: $white;
        line-height: 30px;
        padding: 0 15px;
        font-size: 18px;
        border-radius: 12px;
        cursor: pointer;
      }
      .check-type {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  .main-content {

    flex-grow: 1;
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
  }
}
</style>