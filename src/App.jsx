import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/_Body'
import Player from './components/_Player'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="main">
        <BrowserRouter>
        <div id="body">
          <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/song/:q' element={<Player/>}></Route>
          </Routes>
        </div>
        </BrowserRouter>
      <p id='cr'>Copyright &copy; <a href="https://www.instagram.com/technical_earth_studios/" target='_blank'>Technical Earth Studios</a></p>
      </div>
    </>
  )
}

export default App
