<template>
    <div class="list">

        <div class="mp4-list" v-if="this.parentSite === 'mp4'">
        <a class="items" v-for="video in mp4" :key="video.desc">
            {{ video.desc }}
        </a>
        </div>

        <div class="mp3-list" v-if="this.parentSite === 'mp3'">
        <a class="items" v-for="audio in mp3" :key="audio.desc">
            {{ audio.desc }}
        </a>
        </div>

        <div class="image-list" v-if="this.parentSite === 'kuvalanka'">
        <a class="items" v-for="image in images" :key="image.desc">
            {{ image.desc }}
        </a>
        </div>

        <div class="gif-list" v-if="this.parentSite === 'gifulanka'">
        <a class="items" v-for="gif in gifs" :key="gif.desc">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mp4-list {
    display: inherit;
}
.mp3-list {
    display: inherit;
}
.image-list {
    display: inherit;
}
.gif-list {
    display: inherit;
}
.list {
  margin-top: 2.5rem;
  display: inline-block;
}
.items {
  display: inherit;
  background-color: black;
  padding: 5rem 8rem;
  margin: 5px;
  width: 2rem;
  height: 2rem;
}

</style>
