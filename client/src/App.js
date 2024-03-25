import React, { memo } from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/app-header'
import Footer from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <Header/>
      <div>{useRoutes(routes)}</div>
      <Footer/>
    </div>
  )
})

export default App