<template>
  <div>
    <Modal v-if="showLoginModal">
      <h3 slot="header">Login</h3>
      <div id="loginFields" slot="body">
        <hr/>
        <input type="text" placeholder="Username"/>
        <br/>
        <input type="password" placeholder="Password"/>
        <hr/>
      </div>
      <div slot="footer">
        <button @click="showLoginModal = false">
          Close
        </button>
        <button @click="showLoginModal = false; loggedIn = true">
          Login
        </button>
      </div>
    </Modal>
    <Modal v-if="showUploadModal" @close="showUploadModal = false">
      <h3 slot="header">Upload</h3>
      <div id="uploadFields" slot="body">
        <hr/>
        <input type="text" placeholder="Description"/>
        <br/>
        <input type="file" id="file" ref="file"/>
        <hr/>
      </div>
      <div slot="footer">
        <button @click="showUploadModal = false">
          Close
        </button>
        <button @click="showUploadModal = false">
          Upload
        </button>
      </div>
    </Modal>
    <nav class="navbar">
      <div class="btns">
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      </div>
      <hr/>
      <div>
        <a class="userButtons" v-if="!loggedIn" @click="showLoginModal = true">Login</a>
        <a class="userButtons" v-if="loggedIn" @click="showUploadModal = true">Upload</a>
        <a class="userButtons" v-if="loggedIn" @click="loggedIn = false">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'Navigation',
  components: {
    'Modal': Modal
  },
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'MP4-lanka',
          page: '/mp4'
        },
        {
          id: 1,
          text: 'MP3-lanka',
          page: '/mp3'
        },
        {
          id: 2,
          text: 'Kuvalanka',
          page: '/Kuvalanka'
        },
        {
          id: 3,
          text: 'Gifulanka',
          page: '/gifulanka'
        }
      ],
      loggedIn: false,
      showLoginModal: false,
      showUploadModal: false
    }
  }
}
</script>
<style>
.navbar {
  background-color:#273747;
  padding-top: 1fr;
  box-shadow: 0 0 10px 10px black;
}
.spacing {
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  background-color: #273747;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-right: 1fr;
}
.spacing:hover {
  background-color: #2c3e50a1;
  border-radius: 5px;
}

.router-link-active {
  background-color: #2c3e50e7;
  border-radius: 5px;
}

.userButtons {
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  background-color: #273747;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-right: 1fr;
}
.userButtons:hover {
  background-color: #2c3e50a1;
  border-radius: 5px;
}

a {
  outline: none;
}
</style>
