<template>
  <div>
    <Modal v-if="showLoginModal">
      <h3 slot="header">Login</h3>
      <div id="loginFields" slot="body">
        <hr/>
        <input type="text" placeholder="Username" v-model="inputUser"/>
        <br/>
        <input type="password" placeholder="Password" v-model="inputPwd"/>
        <hr/>
      </div>
      <div slot="footer">
        <button @click="showLoginModal = false">
          Close
        </button>
        <button @click="sendLoginRequest({user: inputUser, pwd: inputPwd})">
          Login
        </button>
      </div>
    </Modal>
    <Modal v-if="showUploadModal" @close="showUploadModal = false">
      <h3 slot="header">Upload</h3>
      <div id="uploadFields" slot="body">
        <hr/>
        <input type="text" placeholder="Description" v-model="inputDesc"/>
        <br/>
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <hr/>
      </div>
      <div slot="footer">
        <button @click="showUploadModal = false">
          Close
        </button>
        <button @click="uploadFileRequest">
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
      <a class="userButtons" v-if="!loggedIn" @click="handleLogin">Login</a>
      <a class="userButtons" v-if="loggedIn" @click="showUploadModal = true">Upload</a>
      <a class="userButtons" v-if="loggedIn" @click="handleLogout">Logout</a>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
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
      loginErrorText: '',
      loginError: false,
      showLoginModal: false,
      showUploadModal: false,
      inputUser: '',
      inputPwd: '',
      inputDesc: '',
      file: ''
    }
  },
  methods: {
    sendLoginRequest (loginInfo) {
      const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/' : '/api/'
      axios.post(`${url}login`, {
        user: loginInfo.user,
        pwd: loginInfo.pwd,
        token: loginInfo.token
      })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('user', res.data.user)
            localStorage.setItem('token', res.data.token)
            this.showLoginModal = false
            this.loggedIn = true
          } else {
            this.loginError = true
            this.loggedIn = false
            this.loginErrorText = res.statusText
            localStorage.setItem('token', '')
            localStorage.setItem('user', '')
            this.showLoginModal = true
          }
        }).catch(err => console.error(err))
    },
    handleLogout () {
      this.loggedIn = false
      localStorage.setItem('token', '')
      localStorage.setItem('user', '')
    },
    handleLogin () {
      if (localStorage.getItem('token') === undefined || localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
        this.showLoginModal = true
      } else {
        const loginInfo = {
          user: localStorage.getItem('user'),
          token: localStorage.getItem('token')
        }
        this.showLoginModal = true
        this.sendLoginRequest(loginInfo)
      }
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      console.log(this.$refs.file.files[0])
      console.log(this.file)
    },
    uploadFileRequest () {
      const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/' : '/api/'
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('desc', this.inputDesc)

      console.log(formData)

      axios.post(`${url}content`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => console.error(err))
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
