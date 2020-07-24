<template>
  <div>
    <itemlist parentSite="mp3"></itemlist>
  </div>
</template>

<script>
import itemlist from './itemlist'
export default {
  name: 'mp3',
  components: {
    'itemlist': itemlist
  }
}
</script>
<style scoped>
audio {
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
