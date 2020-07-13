<template>
    <div class="list">
      <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="item in getList(parentSite)" :key="item">
          <img :src="item.file">
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'itemlist',
  props: {
    parentSite: String
  },
  data: () => {
    return {
      items: {},
      mp4: {},
      mp3: {},
      images: {},
      gifs: {}
    }
  },
  created () {
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : '/api/'
    this.items = axios.get(`${url}`
    ).then(res => {
      console.log(res.data)
      this.mp4 = res.data.mp4
      this.mp3 = res.data.mp3
      this.images = res.data.images
      this.gifs = res.data.gif
      return res.data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    loadAll: function () {
      let allData = { ...this.mp4, ...this.mp3, ...this.images, ...this.gifs }
      return allData
    },
    getList: function (key) {
      switch (key) {
        case 'mp4':
          return this.mp4
        case 'mp3':
          return this.mp3
        case 'kuvalanka':
          return this.images
        case 'gifulanka':
          return this.gifs
        case undefined:
          return this.loadAll()
        default:
          return this.loadAll()
      }
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
