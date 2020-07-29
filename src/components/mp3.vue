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
