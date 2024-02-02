import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
// import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Body from './components/_Body'
import Player from './components/_Player'
import Updates from './components/_Updates'
import PlayerID from './components/_PlayerID'
import SearchResults from './components/_SearchResults'
// import Embed from './components/_Embed'
// import InfoButton from './components/_InfoButton'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  // const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return  isLoading ? 
  <>
    <div className="loadingCont">
      <img src={logo} />
      <h1>Musico.</h1>
    </div>
    <div className="bottom">
      <p className='cr'>Made with ❤ by <a href="https://www.instagram.com/roop_majumder5/" target='_blank'>Roop Majumder</a>.</p>
    </div>
  </>
    :
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
      onContextMenu={(e) => e.preventDefault()}
      >
        <HashRouter>
        <div id="body">
          <Routes 
          basename="/musico"
          >
            <Route path='/' element={<Body/>}></Route>
            <Route path='/updates' element={<Updates/>}></Route>
            <Route path='/search/:q' element={<SearchResults/>}></Route>
            {/* <Route path='/song/:q' element={<Player/>}></Route> */}
            <Route path='/id/:q' element={<PlayerID/>}></Route>
            {/* <Route path='/embed/:id' element={<Embed/>}></Route> */}
          </Routes>
        </div>
        </HashRouter>
      <p id='cr'>&copy; Copyright: All Rights Reserved. Made with ❤ by <a href="https://www.instagram.com/roop_majumder5/" target='_blank'>Roop Majumder</a>.</p>
      </div>
    </>
  
}

export default App
