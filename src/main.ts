import { createApp } from 'vue'

import { inject } from '@vercel/analytics'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupNaive, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupAssets()

  inject()
  setupScrollbarStyle()

  setupNaive(app)

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
