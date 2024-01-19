<template>

    <section class="section">
        <div class="container">
            <ul v-if="items">
                <li v-for="item in items" :key="items.id">{{ item.name }}</li>
            </ul>
        </div>
    </section>

    
</template>
<script>
import axios from 'axios';
import store from '../../store';

export default {

    data() {
      return {
        items: null
      }
    },

    methods: {
      fetchItems() {
        axios
          .get(`${store.BASE_URL}/items`)
          .then((res) => {
            console.log(res);
            this.items = res.data.results
          })
      }
    },
    
    created() {
      this.fetchItems();
    },
    
}
</script>
<style lang="">
    
</style>