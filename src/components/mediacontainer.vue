<template>
  <div>
    <div class="Placeholder" v-if="!show" @click="toggleVisibility">
      <img src="static/placeholder.png">
    </div>
    <div class="content" v-if="show">
      <span v-html="getFile(fileName, type)"></span>
    </div>
    <p>{{desc}}</p>
  </div>
</template>
<script>
export default {
  name: 'mediacontainer',
  props: {
    fileName: String,
    type: String,
    desc: String
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    if (this.type === 'img' || this.type === 'gif') { this.show = true }
  },
  methods: {
    getFile (filename, type) {
      const filePath = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/files/' : '/files/'

      switch (type) {
        case 'mp4':
          return `<video controls preload="metadata" autoplay>
                    <source src="${filePath}${filename}" type="video/mp4">
                  </video>`
        case 'mp3':
          return `<audio controls preload="metadata" autoplay>
                    <source src="${filePath}${filename}" type="audio/mpeg">
                  </audio>`
        default:
          return `<img src="${filePath}${filename}">`
      }
    },
    toggleVisibility () {
      this.show = !this.show
    }
  }
}
</script>
<style>
.Placeholder {
  width: 15rem;
  height: 15rem;
}
.content {
  width: 15rem;
  height: 15rem;
}
img {
  width: 13rem;
  max-height: 13rem;
}
video {
  width: 13rem;
  height: 13rem;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
audio {
  width: 13rem;
  height: 13rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
}
</style>
