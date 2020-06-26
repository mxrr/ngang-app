<template>
    <div class="list">
      <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item" v-if="this.parentSite === undefined">
        <div v-masonry-tile class="item" v-for="item in loadAll(mp4, mp3, images, gif)" :key="item">
          <img :src="item.file">
        </div>
      </div>

      <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item" v-if="this.parentSite === 'mp4'">
        <div v-masonry-tile class="item" v-for="item in mp4" :key="item">
          <img :src="item.file">
        </div>
      </div>

      <div class="mp3-list" v-if="this.parentSite === 'mp3'">
      <a class="items" v-for="audio in mp3" :key="audio">
        {{ audio.desc }}
      </a>
      </div>
      <div class="image-list" v-if="this.parentSite === 'kuvalanka'">
      <a class="items" v-for="image in images" :key="image">
        {{ image.desc }}
      </a>
      </div>
      <div class="gif-list" v-if="this.parentSite === 'gifulanka'">
      <a class="items" v-for="gif in gifs" :key="gif">
        {{ gif.desc }}
      </a>
      </div>
    </div>
</template>

<script>
import items from '../assets/testcontent.json'
export default {
  name: 'itemlist',
  props: {
    parentSite: String
  },
  data: () => {
    return {
      mp4: items.mp4,
      mp3: items.mp3,
      images: items.images,
      gifs: items.gif
    }
  },
  methods: {
    loadAll: function (mp4, mp3, img, gif) {
      let allData = { ...mp4, ...mp3, ...img, ...gif }
      return allData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin-top: 0.5rem;
}
img {
  max-width: 13rem;
}

</style>
