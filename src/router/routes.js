import store from 'src/store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { 
        path: '/dashboard', 
        component: () => import('pages/Dashboard.vue'), 
        beforeEnter: (to, from, next) => {
          console.log(store().getters['user/authenticated'])
          if(store().getters['user/authenticated']){
            return next()
          }
          next('login')
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
