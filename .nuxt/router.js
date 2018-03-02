import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _cdec537a = () => import('../pages/random/index.vue' /* webpackChunkName: "pages/random/index" */).then(m => m.default || m)
const _d0fcc01e = () => import('../pages/image/index.vue' /* webpackChunkName: "pages/image/index" */).then(m => m.default || m)
const _61c50457 = () => import('../pages/maps/index.vue' /* webpackChunkName: "pages/maps/index" */).then(m => m.default || m)
const _a973c87c = () => import('../pages/maps/_id/index.vue' /* webpackChunkName: "pages/maps/_id/index" */).then(m => m.default || m)
const _02705356 = () => import('../pages/foods/_id/index.vue' /* webpackChunkName: "pages/foods/_id/index" */).then(m => m.default || m)
const _565e2fe5 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/random",
			component: _cdec537a,
			name: "random"
		},
		{
			path: "/image",
			component: _d0fcc01e,
			name: "image"
		},
		{
			path: "/maps",
			component: _61c50457,
			name: "maps"
		},
		{
			path: "/maps/:id",
			component: _a973c87c,
			name: "maps-id"
		},
		{
			path: "/foods/:id?",
			component: _02705356,
			name: "foods-id"
		},
		{
			path: "/",
			component: _565e2fe5,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
