<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    this.$http.get(api).then((response) => {

    })
  },
}
</script>

<style lang="scss">
@import './assets/all';

body {
  background: linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)),url(./assets/bodyBcg.jpeg);
}

ul,li {
  list-style-type: none;
}

</style>
