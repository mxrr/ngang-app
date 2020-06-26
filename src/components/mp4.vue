<template>
  <div class="mp4">
    <itemlist></itemlist>
  </div>
</template>

<script>
import itemlist from './itemlist'
export default {
  name: 'mp4',
  components: {
    'itemlist': itemlist
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
