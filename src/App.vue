<template>
  <div id="app">
    <router-link class="home" v-bind:to="'/'">
      <h1 class="title">NGANG MEEMUPANKKI</h1>
    </router-link>
    <Navigation id="nav"></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
* {
  margin: 0;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: rgb(12, 6, 27);
}
::-webkit-scrollbar-thumb {
  background: black;
}
.title {
  color: antiquewhite;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 10px;
}
.title, a {
  text-decoration: none;
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body {
  background-color:rgb(12, 6, 27);
}
</style>
