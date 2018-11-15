import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/components/App'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Add from '@/components/Add'
import Edit from '@/components/Edit'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home,
      children: [
        {
          path: '/:id',
          components: {Add, Detail},
        },

      ]
    },
    { path: '/:id/edit', component: Edit },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
  // routes: [
  //   { path: '/topics',
  //     name: 'topics/View',
  //     component: View,
  //     props: true,
  //     children: [
  //       {
  //         path: 'add',
  //         name: 'topics/add',
  //         components: {Add: Add},
  //         props: true
  //       },
  //       {
  //         path: ':id',
  //         name: 'topics/detail',
  //         components: {Detail: Detail},
  //         props: true
  //       },
  //
  //
  //     ],
  //   },
  // ]
})
