import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Loading from './Components/Loading'
import Tribute from './Components/Tribute'

import './app.scss'

function App() {
  return (
    <Root>
      <React.Suspense fallback={Loading()}>
        <Router>
          <Tribute path="/memorial/tributes/:recordId" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
