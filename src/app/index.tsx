/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './components/NotFoundPage/Loadable'
import { CommonPage } from './components/CommonPage'

export function App() {
  return (
    <BrowserRouter>
      <CommonPage>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </CommonPage>
    </BrowserRouter>
  )
}
