<template>
  <div>
    <itemlist parentSite="gif"></itemlist>
  </div>
</template>

<script>
import itemlist from './itemlist'
export default {
  name: 'gifulanka',
  components: {
    'itemlist': itemlist
  }
}
</script>

<style>
img {
  max-width: 13rem;
}
</style>
