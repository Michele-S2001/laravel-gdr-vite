<script>
import axios from 'axios';
import store from '../../store';
import PageLoader from '../../components/PageLoader.vue';

  export default {
    components: {
      PageLoader
    },

    props: {
      id: String
    },

    data() {
      return {
        character: null
      }
    },

    methods: {
      fetchCharacter() {
        axios
          .get(`${store.BASE_URL}/characters/${this.id}`)
          .then((res) => {
            this.character = res.data.result;
          })
          .catch((error) => {
            if (error.response.status === 404) {
              this.$router.push({ name: 'not-found'});  
            }
          })
      }
    },

    created() {
      this.fetchCharacter();
    }
  }
</script>

<template>
  <section class="section" v-if="character">
    <div class="container-sm">
      <div class="character-showcase">
        <div class="character-details">
          <h1>{{ character.name }}</h1>
          <span>{{ character.type.name }}</span>
          <table class="stats">
            <thead>
              <th>Defence</th>
              <th>Speed</th>
              <th>Hp</th>
            </thead>
            <tbody>
              <tr>
                <td>{{ character.def }}</td>
                <td>{{ character.speed }}</td>
                <td>{{ character.hp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="character-description">
          <p>{{ character.bio }}</p>
        </div>
      </div>

      <div class="character-items">
        <h3>Items</h3>
        <ul class="items">
          <li class="item" v-for="item in character.items">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <PageLoader v-else/>
</template>

<style lang="scss" scoped>
@use '../../style/partials/vars' as *;
  .character-showcase {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    .character-details {
      h1 {
        margin-bottom: 20px;
        text-transform: capitalize;
      }

      span {
        display: block;
        margin-bottom: 30px;
      }

      .stats {
        border: 2px solid $black;
        border-radius: 10px;
        td, th {
          padding: 10px;
        }
      }
    }

    .character-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .character-items {
    padding: 30px 0;

    .items {
      padding: 15px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .item {
        line-height: 30px;
        padding: 0 10px;
        border-radius: 10px;
        border: 2px dotted $black;
      }
    }
  }

</style>