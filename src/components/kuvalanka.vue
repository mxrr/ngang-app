<template>
  <div>
    <itemlist parentSite="img"></itemlist>
  </div>
</template>

<script>
import itemlist from './itemlist'
export default {
  name: 'kuvalanka',
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
