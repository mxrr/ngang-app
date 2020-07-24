<template>
  <div class="mp4">
    <itemlist parentSite="mp4"></itemlist>
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
video {
  max-width: 13rem;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
