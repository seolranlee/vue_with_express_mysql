import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Index from '@/components/IndexPage'
// import Show from '@/components/ShowPage'

import View from '@/components/View'
import Detail from '@/components/Detail'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: View
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
