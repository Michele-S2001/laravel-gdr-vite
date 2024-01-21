<template>
  <div class="section welcome-view">
    <div class="home">
      <h1>Welcome inside <br/> the best gdr game !</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/vars' as *;
.welcome-view {
  height: 100%;
  min-height: calc(100vh - 72px);
  overflow: hidden;
  color: $white;
  background-image: url(../../public/img/welcome-image.png);  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  text-align: center;
  place-items: center;

  .home h1 {
    text-shadow: $black 1px 0 10px;
    font-size: 48px;
  }
}
</style>