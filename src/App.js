import React from 'react'
import Nav from './components/Nav'
import './App.css'
// import VerticalBar from './components/VerticalBar'
// import DoughNut from './components/DoughNut'
// import Area from './components/Area'
import Home from './pages/Home'

function App() {
  return (
    <div className='app'>
      <Nav className="nav"/>
      <Home className="home"/>
      
      {/* <Nav/> */}
    </div>
  )
}

export default App