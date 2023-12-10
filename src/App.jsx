import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Body from './components/_Body'
import Player from './components/_Player'
// import InfoButton from './components/_InfoButton'

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
      <div className="main" 
      // onContextMenu={(e) => e.preventDefault()}
      >
        <HashRouter>
        <div id="body">
          <Routes 
          basename="/musico"
          >
            <Route path='/' element={<Body/>}></Route>
            <Route path='/song/:q' element={<Player/>}></Route>
          </Routes>
        </div>
        </HashRouter>
      <p id='cr'>Copyright &copy; : All Rights Reserved. Made with ❤ by <a href="https://www.instagram.com/roop_majumder5/" target='_blank'>Roop Majumder</a>.</p>
      </div>
    </>
  )
}

export default App
