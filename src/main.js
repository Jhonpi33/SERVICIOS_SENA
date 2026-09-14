import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Tema visual propio del proyecto (colores, tipografía)
import './css/sena-theme.css'


import App from './App.vue'
import router from './routes/index.js'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)

// router.isReady().then (() => { 
//   const navEntries = performance.getEntriesByType('navigation')
//   const fueRecarga = navEntries.length > 0 && navEntries[0].type === 'reload'
//   if (fueRecarga && router.currentRoute.value.path !== '/'){
//     router.replace('/')
//   }
// })
myApp.mount('#app')
