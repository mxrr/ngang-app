import Vue from 'vue'
import Router from 'vue-router'

import mp4 from '@/components/mp4'
import mp3 from '@/components/mp3'
import kuvalanka from '@/components/kuvalanka'
import Gifulanka from '@/components/gifulanka'
import itemlist from '@/components/itemlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mp4',
      name: 'mp4',
      component: mp4
    },
    {
      path: '/mp3',
      name: 'mp3',
      component: mp3
    },
    {
      path: '/kuvalanka',
      name: 'Kuvalanka',
      component: kuvalanka
    },
    {
      path: '/gifulanka',
      name: 'Gifulanka',
      component: Gifulanka
    },
    {
      path: '/',
      name: 'Home',
      component: itemlist
    }
  ]
})
