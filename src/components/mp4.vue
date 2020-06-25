<template>
  <div class="mp4">
    <div class="videolist">
      <a class="videos" v-for="item in items" :key="item.message">
        {{ item.message }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mp4',
  data: () => {
    return {
      items: [
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'},
        {message: 'nee'},
        {message: 'ke'},
        {message: 'ri'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videolist {
  margin-top: 2.5rem;
  display: inline-block;
}
.videos {
  display: inherit;
  background-color: black;
  padding: 5rem 8rem;
  margin: 5px;
  width: 2rem;
  height: 2rem;
}

</style>
