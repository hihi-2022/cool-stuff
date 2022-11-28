import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import ObjectOpener from './ObjectOpener' 
import Home from './Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/object-scroller" element={<ObjectOpener />} /> 
      </Routes>
    </>
  )
}

export default App
