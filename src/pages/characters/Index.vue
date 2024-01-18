<script>
  export default {
    
  }
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="characters-wrapper">
        <div class="character-card">
          <div class="character-card__header">
            <h4>Lorem ipsum</h4>
          </div>
          <div class="character-card__body">
            <ul class="stats">
              <li><span>Def: </span>NaN</li>
              <li><span>Speed: </span>NaN</li>
              <li><span>Hp: </span>NaN</li>
            </ul>
          </div>
        </div>
        <div class="character-card">
          <div class="character-card__header">
            <h4>Lorem ipsum</h4>
          </div>
          <div class="character-card__body">
            <ul class="stats">
              <li><span>Def: </span>NaN</li>
              <li><span>Speed: </span>NaN</li>
              <li><span>Hp: </span>NaN</li>
            </ul>
          </div>
        </div>
        <div class="character-card">
          <div class="character-card__header">
            <h4>Lorem ipsum</h4>
          </div>
          <div class="character-card__body">
            <ul class="stats">
              <li><span>Def: </span>NaN</li>
              <li><span>Speed: </span>NaN</li>
              <li><span>Hp: </span>NaN</li>
            </ul>
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
    }

    &__body {
      padding: 10px 20px 10px 20px;

      .stats {
        & > * {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>