<template>
  <header class="page-header px-10">
    <div class="container">
      <nav>
        <ul class="nav-links">
          <li class="nav-link">
            <router-link :class="{ 'active' : $route.path === '/'}" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-link">
            <router-link :class="{ 'active' : $route.path === '/characters'}" :to="{ name: 'characters.index' }">Characters</router-link>
          </li>
          <li class="nav-link">
            <router-link :class="{ 'active' : $route.path === '/items'}" :to="{ name: 'items.index' }">Items</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;
.page-header {
  border-bottom: 2px solid $black;
  .nav-links {
    padding: 20px 0;
    display: flex;
    gap: 20px;

    .nav-link > *{
      line-height: 30px;
      padding: 0 10px;
    }
  }
}

.active {
  background-color: $black;
  color: $grey;
  border-radius: 5px;
}
</style>