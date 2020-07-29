<template>
    <div class="list">
      <div v-masonry="0" v-if="!loading" transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="item in getList(parentSite)" :key="item._id">
          <mediacontainer :fileName="item.filename" :type="item.type" :desc="item.desc"/>
        </div>
      </div>
      <div class='loading' v-else>
          Loading
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import mediacontainer from './mediacontainer'

let firstLoad = true

export default {
  name: 'itemlist',
  props: {
    parentSite: String
  },
  components: {
    'mediacontainer': mediacontainer
  },
  data: () => {
    return {
      loading: true,
      data: {}
    }
  },
  created () {
    this.loading = true
    firstLoad ? this.getContent() : this.loading = false
  },
  methods: {
    getList (key) {
      this.getContent(key)
      return this.data
    },
    getContent (type) {
      const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/' : '/api/'
      axios.get(`${url}content?type=${type !== undefined ? type : ''}`)
        .then(res => {
          firstLoad = false
          this.data = res.data
          this.loading = false
        }).catch(err => console.error(err))
    },
    getFile (filename, type) {
      const filePath = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/files/' : '/files/'

      switch (type) {
        case 'mp4':
          return `<video controls preload="metadata">
                    <source src="${filePath}${filename}" type="video/mp4">
                  </video>`
        case 'mp3':
          return `<audio controls preload="metadata">
                    <source src="${filePath}${filename}" type="audio/mpeg">
                  </audio>`
        default:
          return `<img src="${filePath}${filename}">`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin-top: 0.5rem;
}

.item {
  background: #192424;
  padding: 5px;
  margin: 10px;
}
</style>
