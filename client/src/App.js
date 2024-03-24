import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Add from './pages/Add'
import Update from './pages/Update'
import Books from './pages/Books'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Add' element=<Add />/>
          <Route path='/Books' element=<Books />/>
          <Route path='/Update/:id' element=<Update /> />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
