import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import p3 from '@/components/p3'
import p4 from '@/components/p4'
import p5 from '@/components/p5'
import p6 from '@/components/p6'
import p7 from '@/components/p7'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'p1',
      component: p1
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2
    },
    {
      path: '/p3',
      name: 'p3',
      component: p3
    },
    {
      path: '/p4',
      name: 'p4',
      component: p4
    }
    ,
    {
      path: '/p5',
      name: 'p5',
      component: p5
    }
    ,
    {
      path: '/p6',
      name: 'p6',
      component: p6
    }
    ,
    {
      path: '/p7',
      name: 'p7',
      component: p7
    }
  ]
})
