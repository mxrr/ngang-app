<template>
  <div>
    <nav class="navbar">
      <div class="btns">
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'MP4-lanka',
          page: '/mp4'
        },
        {
          id: 1,
          text: 'MP3-lanka',
          page: '/mp3'
        },
        {
          id: 2,
          text: 'Kuvalanka',
          page: '/Kuvalanka'
        },
        {
          id: 3,
          text: 'Gifulanka',
          page: '/gifulanka'
        }
      ]
    }
  }
}
</script>
<style>
.navbar {
  background-color:#273747;
  padding-top: 1fr;
  box-shadow: 0 0 10px 10px black;
}
.spacing {
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  background-color: #273747;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-right: 1fr;
}
.spacing:hover {
  background-color: #2c3e50a1;
  border-radius: 5px;
}

.router-link-active {
  background-color: #2c3e50e7;
  border-radius: 5px;
}

a {
  outline: none;
}
</style>
