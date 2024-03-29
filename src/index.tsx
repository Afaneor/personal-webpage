/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as React from 'react'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
// Use consistent styling
import 'sanitize.css/sanitize.css'

// Import root app
import { App } from 'app'

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'

import reportWebVitals from 'reportWebVitals'

// Initialize languages
import './locales/i18n'
import { YMInitializer } from 'react-yandex-metrika'
import { createRoot } from 'react-dom/client'

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root') as HTMLElement
const root = createRoot(MOUNT_NODE)
const yandexMetric = Number(process.env.yandexMetrika)

root.render(
  <ChakraProvider>
    <YMInitializer accounts={[yandexMetric]} />
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </ChakraProvider>,
)

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
